var express = require('express');
var router =express.Router();
var mongoose = require ("mongoose");
var mongojs = require('mongojs');
 var db =mongoose.connection;
var db = mongojs('milestone2', ['categories'])
var categories = [];

//home route
router.get('/',function(req,res){
	db.categories.find(function (err, docs) {

	    res.render('categories.ejs',{
	    	title:'Available categories',
			categories:docs
	    });

	});
	
});
module.exports=router;