var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = require('./app/routes');
var path = require('path');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(router);
app.set('view engine', 'jade');


mongoose.connect('mongodb://localhost:27017/amr',function(err){
	if(err){
		console.log('Cannot connect to the database' + err);
	}else{
		console.log('Connected to the database');
	}
});







app.listen(8080, function(){
	console.log('Runnin');
});
