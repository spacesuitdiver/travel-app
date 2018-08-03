// *** Dependencies
// =============================================================
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require ("express-session");
const env = require('dotenv').load();
const PORT = process.env.PORT || 3001;
// const routes = require("./routes");
const app = express();

// PASSPORT - AZ
const express = require('express');
const passport = require('passport');
const config = require ('')


// For Passport 
// =============================================================
app.use(session({secret:'keyboard cat', resave: true, saveUninitialized:true})); // session secret

app.use(passport.initialize());
 
app.use(passport.session()); // persistent login sessions


// Requiring our models for syncing - AZ
// var db = require("./models");


// Sets up the Express app to handle data parsing - AZ
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Tell the app to look for static files in these directories - AZ

app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

// load passport strategies   - AZ

const localSignUpStrategy = require('./client/passport/local-signup'); 
const localLoginStrategy = require('./client/passport/local-login');
passport.use('local-signup', localSignUpStrategy);
passport.use('local-login', localLoginStrategy);


// pass the authentication checker middleware

const authCheckMiddleware = require('./client/passport/auth-check');
app.use('/api', authCheckMiddleware);


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// MODELS 
// =============================================================

var models = require("./models");

// Routes
// =============================================================
const apiRoutes = require("./routes/api.js")(app,passport);  // change the routes! AZ CHANGE
const authRoutes = require('./routes/auth.js')(app, passport); // 

app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

// Load passport strategies from passport.js
// =============================================================
require("./client/passport")(passport, models.UserSchema); // or just .User


// Add routes, both API and view
// app.use(routes);

// Connect to the Mongo DB
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/travelData");

var mongoURI;

mongoose.connection.on("open", function(ref) {
  console.log("Connected to mongo server.");
//   return start_up();
});

mongoose.connection.on("error", function(err) {
  console.log("Could not connect to mongo server!");
  return console.log(err);
});

mongoURI = process.env.MONGODB_URI || "mongodb://localhost/travelData";

// config.MONGOOSE = 
mongoose.connect(mongoURI);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
