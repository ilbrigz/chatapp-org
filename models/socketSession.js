const mongoose = require("mongoose");

//TODO
const SocketSessionSchema = new mongoose.Schema({
  socketId: { type: String, default: null },
  expireOn: { type: String, default: null },
  createdOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model("SocketSession", SocketSessionSchema);
