const MainRouter = require('express').Router();
const Main = require('../views/Main');
const {Watch} = require('../db/models')



MainRouter.get('/', async(req, res) => {
    const watchArr = await Watch.findAll({
        order: [['id', 'DESC']],
        raw: true
    })
    res.renderComponent(Main, {watchArr})
})

MainRouter.get('/logout', (req, res) => {
    // удаление сессии на сервере
    req.session.destroy((error) => {
    if (error) {
    return res.status(500).json({ message: 'Ошибка при удалении сессии' });
    }
    res
    .clearCookie('user_sid') // серверное удаление куки по имени
    .redirect('/');
    });
    });


module.exports = MainRouter;