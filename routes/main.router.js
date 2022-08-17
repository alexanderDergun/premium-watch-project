const MainRouter = require('express').Router();
const Main = require('../views/Main');


MainRouter.get('/', (req, res) => {
    res.renderComponent(Main, {})
})

module.exports = MainRouter;