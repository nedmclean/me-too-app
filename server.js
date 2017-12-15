
// *** Dependencies ***
var express = require("express");
var bodyParser = require("body-parser");

// *** Sets up the Express App ***

var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing 
var db = require("./models");

// *** Sets up the Express app to handle data parsing ***
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.use(express.static(__dirname+ "/public"));
app.use('/js', express.static('/public/assets/js'));

// *** Routes ***

// require("./routes/html-routes.js")(app);
// require("./routes/post-api-routes.js")(app);
// require("./manage-post-api-routes.js")(app);

// *** Syncing sequelize models and then starting Express app ***

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
