module.exports = function (passport) {
	const path = require("path");
	const router = require("express").Router();

	router.use("/auth",require("./auth.js"));
	
	router.use("/api", require("./api.js"));

	// If no API routes are hit, send the React app
	router.use(function(req, res) {
	  res.sendFile(path.join(__dirname, "../client/build/index.html"));
	});

	return router;
};