const express = require('express');
const session = require('express-session');
const cookiePars = require('cookie-parser');
const morgan = require('morgan');
const sesionConfig = require('./sessionConfig');
const userCheck = require('../middleware/userCheck');
const ssr = require('../middleware/ssr');

module.exports = function Config(app) {
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(cookiePars());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('public'));
  app.use(session(sesionConfig));
  app.use(userCheck);
  app.use(ssr);
};
