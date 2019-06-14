const express = require("express");
const {
  createRoom,
  deleteRoom,
  roomById
} = require("../controllers/roomController");
const router = express.Router();

router.post("/createRoom", createRoom);
router.delete("/room/:roomId", deleteRoom);

router.param("roomId", roomById);

module.exports = router;
