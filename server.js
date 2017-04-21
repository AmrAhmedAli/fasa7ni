var express = require('express');
var router = require('./app/routes.js');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var session= require('express-session');
var passport = require('passport');
var flash   = require('req-flash')
var path= require('path');
var DB_URI = "mongodb://localhost:27017/fassa7ni";

var app = express();

console.log("IN SERVER");

// configure app

app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(session({secret: "sjdhffnrnf", resave:false, saveUninitialized: true}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));


console.log(path.join(__dirname, 'views','layana','css'));
//configure passport

require('./passport')(passport);

mongoose.connect(DB_URI);
app.use(router);

// start the server
app.listen(3000, function(){
    console.log("server is listening on port 3000");
})
