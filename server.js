const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const passport = require("passport");
const session = require('express-session');
const PORT = process.env.PORT || 3001;
const models = require("./models");

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Static assets
app.use(express.static("client/build"));

// For Passport
app.use(session({ secret: 'coders', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport.js')(passport, models.User);

const routes = require("./routes")(passport);
app.use('/', routes);

mongoose.Promise = global.Promise;
if (process.env.MONGODB_URI) {
	mongoose.connect(process.env.MONGODB_URI);
} else {
	mongoose.connect('mongodb://localhost/travelData');
}
var db = mongoose.connection;

db.on('error', function (error) {
	console.log('Mongoose Error: ', error);
});

db.once('open', function () {
	console.log('Mongoose connection successful.');
});

// Start the API server
app.listen(PORT, function () {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});