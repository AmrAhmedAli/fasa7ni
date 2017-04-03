var express = require('express');
var router =express.Router();
var mongoose = require ("mongoose");
var mongojs = require('mongojs');
 var db =mongoose.connection;
var db = mongojs('milestone2', ['ESCAPEplaces'])
var place = [];

//places route
router.get('/',function(req,res){
	db.ESCAPEplaces.find(function (err, docs) {

	    res.render('ESCAPEplaces.ejs',{
	    	title:'Available places',
			place:docs
	    });

	});
	
});
module.exports=router;