var express = require ("express");
var bodyParser = require ("body-parser");
var path = require ("path");
var mongoose = require ("mongoose");
var expressValidator = require ("express-validator");
var localStrategy = require('passport-local').strategy;
var http = require ("http");
var passport = require ("passport");
var exphbs = require('express-handlebars');
var expressValidator = require ("express-validator");
var cookieParser = require('cookie-parser');
 mongoose.connect('mongodb://localhost/rana');
 //var MainRoute= require('./app/route');
var router = require('./app/routes');
var app = express();


// Globale vars 
app.use(function(req,res,next){
	//res.locals.success_msg=req.flash('success_msg');
	//res.locals.error_msg=req.flash('error_msg');
	//res.locals.error_msg=req.flash('error');
	res.locals.errors=null;
	next();
});


app.use(router);
//logger
var logger = function(req,res,next){

	console.log('logging....');
	next();
}
app.use(logger);

app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

//midlleware for our route files

//places
//app.get('/cinemas',MainRoute);
//app.get('/escapeRooms',MainRoute);
//app.get('/fights',MainRoute);
//app.get('/kora',MainRoute);
//app.get('/malahy',MainRoute);
//app.get('/races',MainRoute);
//app.get('/trampolines',MainRoute);
//app.get('/theatres',MainRoute);
//app.get('/places',MainRoute);
//categories
//app.get('/categories',MainRoute);
//offers
//app.get('/offers',MainRoute);
//app.post('/offers',MainRoute);
//update
//app.post('/update/addNum',MainRoute);
//app.post('/update/addEmail',MainRoute);
//app.post('/update/updNum',MainRoute);
//app.post('/update/updEmail',MainRoute);



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

