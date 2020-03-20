var express = require("express");
var router = express.Router();

//SHOWS LANDING HOME PAGE
router.get("/", function(req, res ){
	res.render("home");
});

router.get("/rsvp", function(req, res ){
	res.render("rsvp");
});

router.get("/registry", function(req, res ){
	res.render("registry");
});

module.exports = router;