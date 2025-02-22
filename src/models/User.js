// src/models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  skills: [String], // Array of skill tags
  profilePicture: String,
  ratings: [Number], // Array of ratings
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);