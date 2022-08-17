require('@babel/register');
const app = require('express')();
const Config = require('./config/config');
const Layout = require('./views/Layout');
const Header = require('./views/Header.jsx');
// Импортируем роуты

Config(app);
const PORT = process.env.PORT ?? 3000;

// Подключаем роуты
app.get('/', (req,res) => {
    res.renderComponent(Header, {})
})

app.listen(PORT, () => console.log('Секрет успеха — сделать первый шаг'));
