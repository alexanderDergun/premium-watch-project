const LoginRout = require('express').Router();
const Login = require('../../views/LogReg/Login');

LoginRout.get('/', (req, res) => {
  res.renderComponent(Login, {});
});

module.exports = LoginRout;
