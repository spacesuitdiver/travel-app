module.exports = function (passport) {
	const path = require("path");
	const router = require("express").Router();

	router.use("/auth",require("./auth.js")(passport));
	router.use("/apt", require("./api.js"))(passport);
	router.use("/api", require("./travelRoutes.js")(passport));

	// If no API routes are hit, send the React app
	router.use(function(req, res) {
	  res.sendFile(path.join(__dirname, "../client/build/index.html"));
	});

	return router;
};