var express 	= require("express"),
	  app 		= express(),
	  mongoose 	= require("mongoose"),
	  bodyParser 	= require("body-parser"),
	  mongoose 	= require("mongoose"),
	methodOverride			= require("method-override"),
	  flash		= require("connect-flash");

//========= Requiring Routes ================ JS files ===
var storiesRoutes			= require("./routes/stories"),
	indexRoutes			= require("./routes/index"),
	detailsRoutes			= require("./routes/details"),
	travelsRoutes			= require("./routes/travels");


//========= Connect to MONGO DB (Cloud or Local) ================
var url = (process.env.DATABASEURL || "mongodb://localhost:27017/wedding"); //DEFAULT vals
console.log(process.env.DATABASEURL);

mongoose.connect( url , {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
}).then(() =>{
	console.log("Connected to Mongo Atlas DB!");
}).catch(err => {
	console.log("Error! : ", err.message)
});

//Need TO ADD Passports Config when set up password//

//app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
//app.use(flash()); //flash messages.

//Call function on every single route.
app.use(function(req, res, next){
	//res.locals.currentUser = req.user;
	//res.locals.error = req.flash("error");
	//res.locals.success = req.flash("success");
	next(); //very important
});


//=========================ROUTER USE FUNCTION:===========================

app.use("/", indexRoutes);
app.use("/stories/", storiesRoutes);
app.use("/details/", detailsRoutes);
app.use("/travels/", travelsRoutes);

//==================================== APP listen==============================================
app.listen(process.env.PORT || 3000, function(){
	console.log("Wedding Website running on 3000");
})