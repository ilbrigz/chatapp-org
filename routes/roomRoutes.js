const express = require("express");
const {
  createRoom,
  deleteRoom,
  roomById,
  popularRooms
} = require("../controllers/roomController");
const router = express.Router();

router.post("/createRoom", createRoom);
router.delete("/room/:roomId", deleteRoom);
router.get("/room/popular/:limit", popularRooms);

router.param("roomId", roomById);

module.exports = router;
