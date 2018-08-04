const User = require("../models").User;
const passport = require('passport');
const User = require('./models/User');
const authController = require("../controllers/authController");



module.exports = function (router, passport) {
    const path = require("path");
    const router = require("express").Router();

    router.get('/', function(req, res) {
        res.render('index', {user: req.user});
    });
      
    router.get('/register', function(req, res) {
        res.render('register', {});
    });
      
      router.post('/register', function(req, res, next) {
        console.log('registering user');
        User.register(new User({username: req.body.email}), req.body.password, function(err) {
          if (err) {
            console.log('error while user register!', err);
            return next(err);
          }
      
          console.log('user registered!');
      
          res.redirect('/login');
        });
      });
      
      router.get('/login', function(req, res) {
        res.render('login', {user: req.user});
      });
      
      router.post('/login', passport.authenticate('local'), function(req, res) {
        res.redirect('/travel');
      });
      
      router.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
      });
      
    return router;
 
};

module.exports = router;

  

  
  
