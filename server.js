var express = require("express");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var path = require("path");
// Requiring our models for syncing
var db = require("./models/burger.js");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



app.use(bodyParser.urlencoded({ extended: false }));


// Sets up method-override
app.use(methodOverride("_method"));

// // Static directory
// app.use(express.static(process.cwd() + '/public'));

// Routes =============================================================
var controller = require("./controllers/burgers_controller.js")(app);

app.listen(PORT, function() {
	console.log("Listening on port " + PORT)
});