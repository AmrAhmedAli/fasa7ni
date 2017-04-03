var express = require ("express");
var bodyParser = require ("body-parser");
var path = require ("path");
var categories = require ("./routes/categories");
var places = require ("./routes/places");
//var expressValidator = require ("express-validator");
//var mongoose = require ("mongoose");
//var mongojs = require('mongojs');
//var session = require('express-session');
//var localStrategy = require('passport-local').strategy;
 //mongoose.connect('mongodb://localhost/rana');
 //var db =mongoose.connection;

//var db = mongojs('milestone2', ['categories'])

var app = express();


//logger
var logger = function(req,res,next){

	console.log('logging....');
	next();
}
app.use(logger);


var routes = require('./routes/categories')
var userss = require('./routes/places')

//view engin

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.engine('html',require('ejs').renderFile);


//bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


// set static path 
app.use(express.static(path.join(__dirname,'public')));

//midlleware for our route files

app.use('/',categories);
app.use('/places',places);


//server 
app.listen(8080,function(){

console.log('server.running at port 8080.....');	
});

