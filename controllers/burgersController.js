const express = require("express");

const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");


// get route
router.get("/", function (req, res) {
  res.redirect("/burgers");
});


router.get("/burgers", function (req, res) {
  burger.all(function (burgerData) {
    res.render("index", { burger_data: burgerData });
  });
});


// post route 
router.post("/burgers/create", function (req, res) {
  //Use the req.body.burger_name to create a burger and have access to it 
  burger.create(req.body.burger_name, function (result) {
    console.log(result);
    res.redirect("/");
  });
});


/*
// Create all our routes and set up logic within those routes
router.get("/", function (req, res) {
  cat.all(function (data) {
    var hbsObject = {
      cats: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/cats", function (req, res) {
  cat.create(["name", "sleepy"], [req.body.name, req.body.sleepy], function (result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/cats/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  cat.update(
    {
      sleepy: req.body.sleepy
    },
    condition,
    function (result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

// Export routes for server.js to use.
module.exports = router;
*/