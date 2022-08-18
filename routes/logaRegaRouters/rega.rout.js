const RegaRout = require('express').Router();
const Rega = require('../../views/LogReg/Rega');

RegaRout.get('/', (req, res) => {
  res.renderComponent(Rega, {});
});

module.exports = RegaRout;