var express = require("express");
var router = express.Router();

//======= WEDDING DETAILS DROPDOWN ROUTES =====================================

router.get("/timeline", function(req, res){
	res.render("details/timeline");
});

router.get("/ceremony", function(req, res){
	res.render("details/ceremony");
});

module.exports = router;