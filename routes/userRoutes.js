const express = require("express");
const { getUser, userById } = require("../controllers/userController");
const router = express.Router();

router.get("/user/:userId", getUser);

router.param("userId", userById);

module.exports = router;
