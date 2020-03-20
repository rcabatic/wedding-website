var express = require("express");
var router = express.Router();
// var Campground = require("../models/campground");
// var middleware = require("../middleware"); //index is implied bc middleware is a directory

//======= STORY DROPDOWN ROUTES =====================================

router.get("/aboutUs", function(req, res){
	res.render("stories/aboutUs");
});

router.get("/weddingParty", function(req, res){
	res.render("stories/weddingParty");
});

module.exports = router;