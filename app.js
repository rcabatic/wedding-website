var express 	= require("express"),
	  app 		= express(),
	  mongoose 	= require("mongoose"),
	  bodyParser 	= require("body-parser"),
	  mongoose 	= require("mongoose"),
	  flash		= require("connect-flash");

app.set("view engine", "ejs");

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