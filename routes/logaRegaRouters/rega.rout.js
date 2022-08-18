const RegaRout = require('express').Router();
const Rega = require('../../views/LogReg/Rega');
const { User } = require('../../db/models')

RegaRout.get('/', (req, res) => {
  res.renderComponent(Rega, {});
});

RegaRout.post('/', async (req, res) => {
  console.log(req.body)
  
  try {
    const user = await User.create({
      username: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
      isAdmin: false,
    })

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