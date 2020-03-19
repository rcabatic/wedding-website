const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.set("view engine", "ejs");

mongoose.connect("mongodb+srv://rcabatic:Arseny@clusterar-ayekl.mongodb.net/test?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
}).then(() =>{
	console.log("Connected to Mongo Atlas DB!");
}).catch(err => {
	console.log("Error! : ", err)
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