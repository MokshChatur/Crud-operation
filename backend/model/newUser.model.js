const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

var NewUserSchema = new mongoose.Schema({
  title: String,
  desc: String,
  catDesc: String,
});



module.exports = mongoose.model("NewUsers", NewUserSchema);
