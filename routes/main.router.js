const MainRouter = require('express').Router();
const Main = require('../views/Main');
const {Watch} = require('../db/models');
const WatchModal = require('../views/WatchModal');



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

MainRouter.get('/:id/modal', async (req,res) => {
    const id = Number(req.params.id);

    try {
        const card = await Watch.findByPk(id);
        res.renderComponent(WatchModal, { card }, {doctype: false});
    } catch {
        res.json({
            error: `Часов с таким id ${id} не существует`,
            data: null,
        })
    }
});


MainRouter.delete('/:id/modal', async(req, res) => {
    const id = Number(req.params.id);
    try {
        const card = await Watch.destroy(
            {where: {id}}
        );
        res.redirect('/')
    } catch {
        res.json({
            error: `Часов с таким id ${id} не существует`,
            data: null,
        })
    }

})







module.exports = MainRouter;