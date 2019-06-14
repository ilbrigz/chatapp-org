const Room = require("../models/roomModel");
const User = require("../models/userModel");
const uuidv4 = require("uuid/v4");

require("dotenv").config();

module.exports = {
  createRoom: async (req, res) => {
    let roomExists = await Room.findOne({ roomName: req.body.roomName });
    if (roomExists)
      return res.status(403).json({ roomName: ["Room name is taken!"] });

    const invitedUser1 = await User.findOne({
      $or: [
        { userName: req.body.invitedUser1 },
        { email: req.body.invitedUser1 }
      ]
    }).select("_id");
    if (!invitedUser1)
      return res
        .status(403)
        .json({ invitedUser1: ["Invited userName or email not found!"] });

    const invitedUser2 = await User.findOne({
      $or: [
        { userName: req.body.invitedUser2 },
        { email: req.body.invitedUser2 }
      ]
    }).select("_id");

    req.body.usersInvited = [
      ...(invitedUser1 ? [invitedUser1] : []),
      ...(invitedUser2 ? [invitedUser2] : [])
    ];

    const room = await new Room(req.body);
    await room.save();

    return res.status(200).json(room);
  }
};
