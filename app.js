require('@babel/register');
const app = require('express')();
const Config = require('./config/config');
// Импортируем роуты

Config(app);
const PORT = process.env.PORT ?? 3000;

// Подключаем роуты

app.listen(PORT, () => console.log('Секрет успеха — сделать первый шаг'));
