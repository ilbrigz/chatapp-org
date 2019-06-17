const socket_io = require("socket.io");
const mongoose = require("mongoose");
const Message = require("../models/msgModel");
const Room = require("../models/roomModel");
const User = require("../models/userModel");
const SocketSession = require("../models/SocketSession");

//TODO

module.exports.socketio = server => {
  const io = socket_io(server);
  io.on("connection", socket => {
    console.log("socket connected");
  });
};
