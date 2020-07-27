const express = require("express");

const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");


// GET route
router.get("/", function (req, res) {
  res.redirect("/burgers");
});


router.get("/burgers", function (req, res) {
  burger.all(function (burgerData) {
    res.render("index", { burger_data: burgerData });
  });
});


// POST route 
router.post("/burgers/create", function (req, res) {
  //Use the req.body.burger_name to create a burger and have access to it 
  burger.create(req.body.burger_name, function (result) {
    console.log(result);
    res.redirect("/");
  });
});


// PUT route 
router.put("/burgers/:id", function (req, res) {
  // use the req.params.id in the update
  burger.update(req.params.id, function (result) {
    console.log(result);
    // Send back response
    res.sendStatus(200);
  });
});

module.exports = router;
