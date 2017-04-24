var Admin = require('../models/Admin');
var ServiceProvider  = require('../models/ServiceProvider');
var User= require('../models/User');
var validator = require('validator');
var path    = require("path");


var verificationController = {

  index: function(req, res){
    res.sendFile(path.join(__dirname, '../../public/index.html'));//virtual page names
  },

  signup: function(req,res){
    var message=req.flash('mess');
     res.send(message);
       // virtual page names
  },

  signIn: function(req,res){

    var message=req.flash('mess');
    console.log(req.user);
    res.send(message); //virtual page names
  },

  signOut: function(req, res){
      console.log(req.body);
      req.logout();
      console.log("logout");


      res.send('logout');
  }

}

module.exports = verificationController;
