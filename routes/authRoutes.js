const express = require("express");
const { signup, signin } = require("../controllers/autController");
const { signupValidator } = require("../validator/authValidator");
const router = express.Router();

router.post("/signup", signupValidator, signup);

// singin route
// this will store a jwt in the cookie
// the cookie cannot be accessed with javascript because of the httpOnly: true so the userId and firstName is included in the response
// the req looks something like this {username: 'string', password: 'password' }
// the res will be like this {
// "userId": "5cfc45165af0430744bb61ca",
// "verificationId": "77387130-53f6-4bad-8acd-63f59bb2a935",
// "firstName": "brayn"
// }
// the verificationId will be be compared to the jwt verificationId in the jwt payload. just additional security. we can remove this if you want
// just me sute to set the default header to have   "payload-verification-id" equal to  res.verificationId;
router.post("/signin", signin);

module.exports = router;
