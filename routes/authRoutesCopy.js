const User = require("../models").User;
const authController = require("../controllers/authController");
const router = require("express").Router();
const path = require("path");
   

module.exports = function (passport)  {
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
      
      router.post('/login', passport.authenticate('local'), function(req, res) {
        console.log(req.user);
        res.json(req.user);
        // res.redirect('/travel');
      });
      
      router.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
      });
      
      return router
}


  

  
  
