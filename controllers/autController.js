const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const uuidv4 = require("uuid/v4");

require("dotenv").config();

const signup = async (req, res) => {
  let userExists = await User.findOne({ userName: req.body.userName });
  if (userExists)
    return res.status(403).json({ userName: ["userName is taken!"] });
  userExists = await User.findOne({ email: req.body.email });
  if (userExists) return res.status(403).json({ email: ["Email is taken!"] });
  const user = await new User(req.body);
  await user.save();

  return res.status(200).json(user);
};
const signin = async (req, res) => {
  const { userName: emailOrUserName, password } = req.body;

  const verificationId = uuidv4();

  // not sure about this.
  // we check the userName first if no result then we check the it as a userName
  let user = await User.findOne({ email: emailOrUserName });

  if (!user) {
    user = await User.findOne({ userName: emailOrUserName });
  }

  if (!user) {
    return res.status(401).json({
      userName: ["User with that email or username does not exist."]
    });
  }
  if (!user.authenticate(password)) {
    return res.status(401).json({
      err: ["userName and password do not match"]
    });
  }
  const { _id, userName, firstName } = user;

  // generate token
  const token = jwt.sign(
    {
      userName: emailOrUserName,
      _id: user.id,
      verificationId
    },
    process.env.JWT_SECRET
  );

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // cookie expires in 7 days
  res.cookie("t", token, {
    expire: new Date() + 3600000 * 24 * 7,
    httpOnly: true
  });

  return res.status(200).json({
    userId: _id,
    userName,
    verificationId,
    firstName
  });
};

module.exports = { signin, signup };
