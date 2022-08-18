const RegaRout = require('express').Router();
const Rega = require('../../views/LogReg/Rega');
const { User } = require('../../db/models')
const bcrypt = require('bcrypt');

RegaRout.get('/', (req, res) => {
  res.renderComponent(Rega, {});
});

RegaRout.post('/', async (req, res) => {
  
  try {
    const user = await User.create({
      username: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: await bcrypt.hash(req.body.password, 10),
      isAdmin: false,
    })

    req.session.user = user;
    res.redirect('/');
  } catch (error) {
    res.json({error: error.message, data: null});
  }
  


  // if(req.body.name === 'fedor') {
  //   res.json({error: null})
  // } 
  // res.json({error: 1})

})

module.exports = RegaRout;