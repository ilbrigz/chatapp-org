const express = require("express");
const { createRoom } = require("../controllers/roomController");
const router = express.Router();

router.post("/createRoom", createRoom);
// router.post("/signin", signin);

module.exports = router;
