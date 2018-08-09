const router = require('express').Router();
const User = require("../models").User;
const authController = require("../controllers/authController");
const path = require("path");




module.exports = function (passport) {

    router.get('/', function(req, res) {
		res.render('index', {user: req.user});
	  });
	//Receives request when App.js mounts
	router.get("/auth", authController.getAuthentication);

	router.post("/register", authController.createNewUser);

	// router.post("/login", (req, res, next) => {

	// 	passport.authenticate('local', (err, user, info) => {
	// 		if (!user) {
	// 			res.json(info);
	// 		}

	// 		else{
	// 			authController.signInUser(user, res)
	// 			var redir = { redirect: '/travel'}
	// 		}
	// 	})
	//  (req, res)
	// });

	router.post("/login", (req, res, next) => {
			console.log(req.body)
			next();
		}, 

		passport.authenticate('local'), 
		(req, res) => {
			console.log('logged in', req.user);
				var userInfo = {
					email: req.user.email
				};
				
			res.send(userInfo);
		}
	)
	  
	router.get('/logout', authController.logoutUser);

	return router;
};