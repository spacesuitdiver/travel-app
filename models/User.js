const mongoose = require('mongoose');
<<<<<<< HEAD
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

=======
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;


const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    index: { unique: true }
  },
  password: String,
  name: String,
  
  firstName: {
    type: String,
    default: "FirstName"
  },

  lastName: {
    type: String,
    default: "LastName"
  },

  });

/**
 * Compare the passed password with the value in the database. A model method.
 *
 * @param {string} password
 * @returns {object} callback
 */
 UserSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};


/**
 * The pre-save hook method.
 */
 UserSchema.pre('save', function saveHook(next) {
  const user = this;

  // proceed further only if the password is modified or the user is new
  if (!user.isModified('password')) return next();


  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) { return next(saltError); }

    return bcrypt.hash(user.password, salt, (hashError, hash) => {
      if (hashError) { return next(hashError); }

      // replace a password string with hash value
      user.password = hash;

      return next();
    });
  });
});


 module.exports = mongoose.model('User', UserSchema);
>>>>>>> b88281d9ecb065ec4a49f950579af2fd347280c5
