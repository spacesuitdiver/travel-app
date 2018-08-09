const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const passportLocalMongoose = require('passport-local-mongoose');

// define the User model schema
const User = new mongoose.Schema({


  firstname: {
    type: String,
    notEmpty: true
  },

  lastname: {
    type: String,
    notEmpty: true
  },

  email: {
        type: String, 
        index: { unique: true }
  },

  logged_in: {
    type: Boolean,
    default: true,
  }
});



User.plugin(passportLocalMongoose);


module.exports = mongoose.model('User', User);

