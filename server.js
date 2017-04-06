//require depenciess
var express = require('express');
var router = require('./app/routes');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require ('path');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');
var passport = require('passport');
var session= require('express-session');

var DB_URI = "mongodb://localhost:27017/fasa7ni";

var app = express();
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

// configure app
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname+ '/public'));
mongoose.connect(DB_URI);
app.use(router);
app.use(cookieParser());
app.use(flash());
app.use(session({secret: "sjdhffnrnf", resave:false, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

//configure passport

require('./passport')(passport);


// Global Vars
app.use (function (req,res,next){
  res.locals.errors=null;
  next();
})

// start the server
app.listen(6500, function(){
    console.log("server is listening on port 6500");
})
