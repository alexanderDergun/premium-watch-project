module.exports = function sessionCheck(req, res, next) {
  // console.log(req.session.user);
  if (req.session.user) {
    res.locals.user = req.session.user;
  }


  next();
};
