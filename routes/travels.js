var express = require("express");
var router = express.Router();

//======= WEDDING DETAILS DROPDOWN ROUTES =====================================

router.get("/europe", function(req, res){
	res.render("travels/europe");
});

router.get("/accomodation", function(req, res){
	res.render("travels/accomodation");
});

router.get("/funStuff", function(req, res){
	res.render("travels/funStuff");
});

module.exports = router;