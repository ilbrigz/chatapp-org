const Room = require("../models/roomModel");
const User = require("../models/userModel");

require("dotenv").config();

const userById = (req, res, next, id) => {
  User.findById(id)
    .populate("joinedRooms", "_id roomName")
    .populate("favoriteRooms", "_id roomName onlineCount")
    .populate("friends", "_id firstName")
    .select("firstName _id")
    .exec((err, user) => {
      if (err || !user) {
        return res.status(400).json({
          err
        });
      }
      req.user = user;
      next();
    });
};
const getUser = (req, res, next) => {
  return res.json(req.user);
};

module.exports = { userById, getUser };
