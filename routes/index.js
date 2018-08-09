module.exports = function (passport) {
	const path = require("path");
	const router = require("express").Router();

<<<<<<< HEAD
	router.use("/auth",require("./authRoutes.js")(passport));
	router.use("/api", require("./travelRoutes.js")(passport));
=======
	router.use("/auth",require("./auth.js"));
	
	router.use("/api", require("./api.js"));
>>>>>>> b88281d9ecb065ec4a49f950579af2fd347280c5

	// If no API routes are hit, send the React app
	router.use(function(req, res) {
	  res.sendFile(path.join(__dirname, "../client/build/index.html"));
	});

	return router;
};