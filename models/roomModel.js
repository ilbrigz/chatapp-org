const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const roomSchema = new mongoose.Schema({
  roomName: {
    type: String,
    trim: true,
    required: "Title is required",
    minlength: 4,
    maxlength: 16
  },
  subscribers: [{ type: ObjectId, ref: "User" }],
  usersOnline: [{ type: ObjectId, ref: "User" }],
  usersTyping: [{ type: ObjectId, ref: "User" }],
  usersInvited: [{ type: ObjectId, ref: "User" }],
  isPublic: { type: Boolean, default: true },
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
