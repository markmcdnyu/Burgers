//Require express
const express = require("express");

// All consts for the PORT and app for express
const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgersController.js");

app.use(routes);

app.listen(PORT, function () {
    console.log("Listening on port:%s", PORT);
});