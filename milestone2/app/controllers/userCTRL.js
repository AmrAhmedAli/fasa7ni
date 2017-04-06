var Cinemas= require('../models/Cinema');
var Concerts= require('../models/Concert');
var categories= require('../models/Category');
var EscapeRooms= require('../models/EscapeRoom');
var Fights= require('../models/Fight');
var Koraa= require('../models/Kora');
var Malahyy= require('../models/Malahy');
var Races= require('../models/Race');
var Trampolines= require('../models/Trampoline');
var Theatres= require('../models/Theatre');

var userController = {

viewCategories : function(req,res){
	var category = categories();
			categories.find(function (err, docs) {


				if(err) res.json(err);
				else res.render('categories.ejs',{title:'Available categories',category:docs});

			});
		},
viewCinemas : function(req,res){
	
			Cinemas.find({},function (err, docs) {

				if(err) res.json(err);
				else res.render('CINEMAplaces.ejs',{title:'Available Cinemas',cinema:docs});

			});
		},
viewConcerts : function(req,res){
	
			Concerts.find({},function (err, docs) {

				if(err) res.json(err);
				else res.render('CONCERTplaces.ejs',{title:'Available Concerts',concert:docs});

			});
		},
viewEscapeRooms : function(req,res){
	
			EscapeRooms.find({},function (err, docs) {

				if(err) res.json(err);
				else res.render('ESCAPEplaces.ejs',{title:'Available Escape Rooms',escapeRoom:docs});

			});
		},
viewFights : function(req,res){
	
			Fights.find({},function (err, docs) {

				if(err) res.json(err);
				else res.render('FIGHTplaces.ejs',{title:'Available Fights',fight:docs});

			});
		},
viewKora : function(req,res){
	
			Koraa.find({},function (err, docs) {

				if(err) res.json(err);
				else res.render('KORAplaces.ejs',{title:'Available Kora',kora:docs});

			});
		},
viewMalahy : function(req,res){
	
			Malahyy.find({},function (err, docs) {

				if(err) res.json(err);
				else res.render('MALAHYplaces.ejs',{title:'Available Malahy',malahy:docs});

			});
		},
viewRaces : function(req,res){
	
			Races.find({},function (err, docs) {

				if(err) res.json(err);
				else res.render('RACEplaces.ejs',{title:'Available Races',race:docs});

			});
		},
viewTrampolines : function(req,res){
	
			Trampolines.find({},function (err, docs) {

				if(err) res.json(err);
				else res.render('TRAMPOLINEplaces.ejs',{title:'Available Trampolines',trampoline:docs});

			});
		},
viewTheatres : function(req,res){
	
			Theatres.find({},function (err, docs) {

				if(err) res.json(err);
				else res.render('THEATREplaces.ejs',{title:'Available Theatres',theatre:docs});

			});
		}
	}

module.exports = userController;