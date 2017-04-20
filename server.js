var express = require('express');
var app =express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = require('./app/routes.js');
//var appRoutes = require('./app/route');
var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(router);

mongoose.connect('mongodb://localhost:27017/test', function(err){
	if(err){
		console.log('Cannot connect to the database' + err);
	}else{
		console.log('Connected to the database');
	}
});

app.listen(process.env.PORT || 8082, function(){
	console.log('connected');
});


//router.post('/serviceProvider', appRoutes);
//router.post('/admin', appRoutes);
//router.post('/user', appRoutes);