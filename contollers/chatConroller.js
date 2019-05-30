const socket_io = require("socket.io");

module.exports.socketio = server => {
  const io = socket_io(server);

  io.on("connection", socket => {
    console.log("someone connected");
    socket.emit("a", "hello from the server");
  });
};
