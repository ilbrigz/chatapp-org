const Room = require("../models/roomModel");
const User = require("../models/userModel");
const uuidv4 = require("uuid/v4");

require("dotenv").config();

const roomById = (req, res, next, id) => {
  Room.findById(id)
    .populate("postedBy", "_id firstName")
    .populate("subscribers", "_id firstName")
    .populate("usersOnline", "_id firstName")
    .populate("usersTyping", "_id firstName")
    .populate("usersInvited", "_id firstName")
    .exec((err, room) => {
      if (err || !room) {
        return res.status(400).json({
          err
        });
      }
      req.room = room;
      next();
    });
};

const createRoom = async (req, res) => {
  let roomExists = await Room.findOne({ roomName: req.body.roomName });
  if (roomExists)
    return res.status(403).json({ roomName: ["Room name is taken!"] });

  const invitedUser1 = await User.findOne({
    $or: [{ userName: req.body.invitedUser1 }, { email: req.body.invitedUser1 }]
  }).select("_id");

  if (!invitedUser1)
    return res
      .status(403)
      .json({ invitedUser1: ["Invited userName or email not found!"] });

  const invitedUser2 = await User.findOne({
    $or: [{ userName: req.body.invitedUser2 }, { email: req.body.invitedUser2 }]
  }).select("_id");

  req.body.usersInvited = [
    ...(invitedUser1 ? [invitedUser1] : []),
    ...(invitedUser2 ? [invitedUser2] : [])
  ];

  const room = await new Room(req.body);
  await room.save();

  return res.status(200).json(room);
};

const deleteRoom = async (req, res) => {
  const room = req.room;
  room.remove((err, room) => {
    if (err) {
      return res.status(400).json({ err });
    }
    return res.json({ message: "Room deleted successfully" });
  });
};

const popularRooms = async (req, res) => {
  const limit = parseInt(req.params.limit);
  Room.aggregate([
    {
      $addFields: {
        user_count: { $size: { $ifNull: ["$usersOnline", []] } }
      }
    },
    { $limit: limit },
    {
      $sort: { user_count: -1 }
    },
    {
      $project: {
        _id: "$_id",
        roomName: "$roomName",
        userCount: "$user_count"
      }
    }
  ])
    .then(result => res.status(200).json({ rooms: result }))
    .catch(e => res.status(402).json({ err: "Something went wrong" }));
};

module.exports = { roomById, popularRooms, createRoom, deleteRoom };
