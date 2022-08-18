const RegaRout = require('express').Router();
const Rega = require('../../views/LogReg/Rega');

RegaRout.get('/', (req, res) => {
  res.renderComponent(Rega, {});
});

RegaRout.post('/', (req, res) => {
  console.log(req.body.name)
  // if(req.body.name === 'fedor') {
  //   res.json({error: null})
  // } 
  // res.json({error: 1})

})

module.exports = RegaRout;