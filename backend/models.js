const mongoose = require("mongoose");

var NewUserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  image: String,
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});



module.exports = mongoose.model("NewUsers", NewUserSchema);
