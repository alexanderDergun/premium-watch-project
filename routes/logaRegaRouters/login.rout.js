const LoginRout = require("express").Router();
const Login = require("../../views/LogReg/Login");
const bcrypt = require('bcrypt')
const { User } = require("../../db/models");

LoginRout.get("/", (req, res) => {
  res.renderComponent(Login, {});
});

LoginRout.post("/", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({
    raw: true,
    where: { email },
  });

  if (user && (await bcrypt.compare(password, user.password))) {
    req.session.user = user;
    res.redirect('/')
  } else {
    res.json({login: false})
  }
});

module.exports = LoginRout;
