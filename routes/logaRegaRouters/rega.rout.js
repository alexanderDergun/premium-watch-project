const RegaRout = require('express').Router();
const Rega = require('../../views/LogReg/Rega');
const { User } = require('../../db/models')
const bcrypt = require('bcrypt');

RegaRout.get('/', (req, res) => {
  res.renderComponent(Rega, {});
});

RegaRout.post('/', async (req, res) => {
  const { name, email, phone, password } = req.body;
  try {
    const userIn = await User.findOne({
      raw: true,
      where: { email },
    })
    if (!userIn) {
      const user = await User.create({
        username: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: await bcrypt.hash(req.body.password, 10),
        isAdmin: false,
      })
      req.session.user = user;
      res.redirect('/');
    } else {
      res.json({ registration: false });
    }
  } catch (error) {
    res.json({ error: error.message, data: null });
  }
})

module.exports = RegaRout;