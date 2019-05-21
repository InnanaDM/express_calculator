var express = require("express");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Create express app instance.
var app = express();

// Routes
// What routes do you need to have? Which ones are optional?
// TODO Add your routes here
app.get("", function(req, res) {

  // TODO parse out the variables from the request
  // Parameters are received from the URL
  // TODO make sure they're converted to integers (and not strings)
  // Parameters are converted to integers
