const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    validate: {
      notEmpty: true
    }
  },
  password: {
    type: String,
    required: true,
    validate: {
      notEmpty: true
    }
  },
  logged_in: {
    type: Boolean,
    default: true,
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
