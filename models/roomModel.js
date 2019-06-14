const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const roomSchema = new mongoose.Schema({
  roomName: {
    type: String,
    required: "Title is required",
    minlength: 4,
    maxlength: 16
  },
  subscribers: [{ type: ObjectId, ref: "User" }],
  onlineUsers: [{ type: ObjectId, ref: "User" }],
  typingUsers: [{ type: ObjectId, ref: "User" }],
  createdBy: {
    type: ObjectId,
    ref: "User"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Room", roomSchema);
