var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();
//var appRoutes = require('./app/routes');
var path = require('path');
mongoose.connect('mongodb://localhost:27017/nour');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));




app.listen(8080, function(){
	console.log('connected');
});