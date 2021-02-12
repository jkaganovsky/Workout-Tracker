// Requiring necessary npm packages
const express = require( "express" );
const logger = require( "morgan" );
const mongoose = require( "mongoose" );

// Requiring the models folder before connecting to the server
require("./models");

// Setting up PORT for Heroku connection
const PORT = process.env.PORT || 3000;

// Creating express app
const app = express();

// Viewing connection statuses on terminal
app.use(logger("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

// Connecting to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts_db", {useNewUrlParser: true});

// Requiring Routes
app.use(require("./routes"));

// Start Server
app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
});