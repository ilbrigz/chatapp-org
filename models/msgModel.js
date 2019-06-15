const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const msgSchema = new mongoose.Schema({
  message: {
    type: String,
    required: "Title is required",
    trim: true
  },
  avatar: {
    type: String
  },
  sender: {
    type: ObjectId,
    ref: "User"
  },
  room: {
    type: ObjectId,
    ref: "Room"
  },
  createAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Message", msgSchema);
