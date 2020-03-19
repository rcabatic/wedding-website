var express 	= require("express"),
	  app 		= express(),
	  mongoose 	= require("mongoose"),
	  bodyParser 	= require("body-parser"),
	  mongoose 	= require("mongoose"),
	methodOverride			= require("method-override"),
	  flash		= require("connect-flash");

var url = process.env.DATABASEURL || "mongodb://localhost:27017/wedding"; //DEFAULT vals
console.log(process.env.DATABASEURL); //shows you which one..


mongoose.connect( url , {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
}).then(() =>{
	console.log("Connected to Mongo Atlas DB!");
}).catch(err => {
	console.log("Error! : ", err.message)
});

//Need Passports Config when set up password

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public")); //safer if directory changed., for stylesheet. 
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

//==ROUTES== 
	
app.get("/", function(req, res){
	res.render("home");
});

app.get("/aboutUs", function(req, res){
	res.render("aboutUs");
});


//==== APP listen======
app.listen(3000, function(){
	console.log("Wedding Website running on 3000");
})