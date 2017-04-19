var Admin = require('../models/Admin');
var ServiceProvider  = require('../models/ServiceProvider');
var User= require('../models/User');
var validator = require('validator');


var verificationController = {

  index: function(req, res){


    res.render('index'); //virtual page names
  },

  signUp: function(req,res){
    res.render('signUp'); // virtual page names
  },

  signIn: function(req,res){
    res.render('signIn'); //virtual page names
  },

  signOut: function(req, res){
      req.logout();
      res.redirect('/');
  }

}

module.exports = verificationController;
