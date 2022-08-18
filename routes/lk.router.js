const Lk = require("../views/Lk");
const FixData = require("../views/FixData");
const AddNewFile = require("../views/AddNewFile");
const { query } = require("express");
const LkRout = require("express").Router();
const { User } = require("../db/models");

LkRout.get("/", (req, res) => {
  res.renderComponent(Lk, {});
});

LkRout.get("/editor", (req, res) => {
  res.renderComponent(FixData, {});
});

LkRout.put("/editor", async (req, res) => {
  const { name, email, phone, password } = req.body;
  const {id} = req.session.user

  try {
      const data = await User.update(
        { username: name,
            email,
            phone, 
            password,
        }, 
        { where: {id} });
  } catch (error) {
    res.status(500).send('Something broke!');
  }

});

LkRout.get("/newFile", (req, res) => {
  res.renderComponent(AddNewFile, {});
});

module.exports = LkRout;
