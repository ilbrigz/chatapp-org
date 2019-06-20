const { ObjectId } = require("mongodb");
const {
  getObjectId,
  names,
  rooms,
  getRandomId,
  getRandomIds
} = require("../../helper");

module.exports = rooms.map(room => {
  return {
    _id: getObjectId(room),
    roomName: room,
    subscribers: getRandomIds(names),
    usersOnline: getRandomIds(names),
    usersTyping: getRandomIds(names),
    usersInvited: getRandomIds(names),
    isPublic: true,
    onlineCount: Math.floor(Math.random() * 6) + 1,
    createdBy: getRandomIds(names)
  };
});
