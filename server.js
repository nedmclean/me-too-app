
// *** Dependencies ***
var express = require("express");
var bodyParser = require("body-parser");
var app = express();


// moving path to html-api-routes.js
// var path = require("path");
// *** Sets up the Express App ***

var PORT = process.env.PORT || 8080;

// Requiring our models for syncing 
var db = require("./models");

// *** Sets up the Express app to handle data parsing ***
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.use(express.static("public"));

require("./routes/html-api-routes")(app);
require("./routes/post-api-routes")(app);
// require("./manage-post-api-routes")(app);



// *** Syncing sequelize models and then starting Express app ***


db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
