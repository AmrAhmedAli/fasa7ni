var express = require('express');
var router = require('./app/routes.js');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var session= require('express-session');
var passport = require('passport');
var flash    = require('connect-flash');
var DB_URI = "mongodb://localhost:27017/fassa7ni";
var expressValidator = require ("express-validator");

var app = express();

app.set('view engine', 'jade');

// configure app
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(session({secret: "sjdhffnrnf", resave:false, saveUninitialized: true}));
app.use(flash());
app.use(passport.initialize());
app.use(express.static(__dirname+'/layana'));
app.use(passport.session());


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


//configure passport

require('./passport')(passport);

mongoose.connect(DB_URI);
app.use(router);

app.get('/',function(req,res){

	res.sendFile(path.join(__dirname+'/layana/index.html'));
});

// start the server
app.listen(3000, function(){
    console.log("server is listening on port 3000");
})
