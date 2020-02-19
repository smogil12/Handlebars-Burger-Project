var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };

    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  console.log(req.body.burger_name);
  if (req.body.burger_name !== "") {
    burger.insertOne(req.body.burger_name.trim(), function() {
      res.redirect("/");
    });
  }
});

router.put("/api/burgers/:id", function(req, res) {
  console.log(req.params.id);

  burger.updateOne(req.params.id, function() {
    console.log("calling cb");
    res.redirect("/");
  });
});

module.exports = router;
