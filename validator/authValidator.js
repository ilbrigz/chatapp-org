exports.signupValidator = (req, res, next) => {
  req.check("firstName", "Name is required").notEmpty();
  req.check("lastName", "Last name is required").notEmpty();
  req.check("userName", "Username is required").notEmpty();
  req.check("email", "Email is required").notEmpty();
  req.check("email", "Please use a valid email address").isEmail();
  req
    .check("email", "Email must be 3 to 32 characters")
    .isLength({ min: 3, max: 32 });
  req
    .check("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must contain at least 6 characters")
    .matches(/\d/)
    .withMessage("Password must contain a number");
  req.check("password2", "Confirm password is required").notEmpty();
  req
    .checkBody("password2", "Passwords do not match")
    .equals(req.body.password);
  // check for errors
  const errors = req.validationErrors();
  //if error show the first one as they appear

  if (errors) {
    const err = {};
    errors.forEach(
      e => (err[e.param] = err[e.param] ? [...err[e.param], e.msg] : [e.msg])
    );
    return res.status(401).json(err);
  }
  next();
};
