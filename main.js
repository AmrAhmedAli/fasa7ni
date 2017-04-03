var express = require ("express");
var bodyParser = require ("body-parser");
var path = require ("path");
var categories = require ("./routes/categories");
var mongoose = require ("mongoose");
var expressValidator = require ("express-validator");
var localStrategy = require('passport-local').strategy;
var http = require ("http");
var passport = require ("passport");
var exphbs = require('express-handlebars');
var expressValidator = require ("express-validator");
var cookieParser = require('cookie-parser');
 mongoose.connect('mongodb://localhost/rana');
 var MainRoute= require('./routes/MainRoute');
var app = express();


//logger
var logger = function(req,res,next){

	console.log('logging....');
	next();
}
app.use(logger);


//midlleware for our route files

app.get('/places',MainRoute);


//view engin
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.engine('html',require('ejs').renderFile);


//bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());


// set static path 
app.use(express.static(path.join(__dirname,'public')));

//passport initialization
app.use(passport.initialize());
app.use(passport.session());


//server 
app.listen(8080,function(){

console.log('server.running at port 8082.....');	
});

