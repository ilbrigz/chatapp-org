const mongoose = require("mongoose");
const uuidv1 = require("uuid/v1");
const crypto = require("crypto");
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    required: true
  },
  about: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    trim: true,
    required: true
  },
  userName: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    required: true
  },
  hashed_password: {
    type: String,
    required: true
  },
  salt: String,
  created: {
    type: Date,
    default: Date.now
  },
  subscribedRooms: [
    {
      type: ObjectId,
      ref: "Room"
    }
  ],
  joinedRooms: [
    {
      type: ObjectId,
      ref: "Room"
    }
  ],
  favoriteRooms: [
    {
      type: ObjectId,
      ref: "Room"
    }
  ],
  friends: [
    {
      type: ObjectId,
      ref: "User"
    }
  ]
});

// add virtual fields to schema
userSchema
  .virtual("password")
  .set(function(password) {
    // create temporary variable called _password
    this._password = password;
    // generate a timestamp
    this.salt = uuidv1();
    // encrypt password
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function() {
    return this._password;
  });

// add methods to schema
userSchema.methods = {
  authenticate: function(plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },
  encryptPassword: function(password) {
    if (!password) {
      return "";
    }
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  }
};

module.exports = mongoose.model("User", userSchema);
