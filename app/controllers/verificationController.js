//import models

var Admin = require('../models/Admin');
var ServiceProvider  = require('../models/ServiceProvider');
var User= require('../models/User');
var validator = require('validator'); //validate strings
var path    = require("path"); // gets path


var verificationController = {

  index: function(req, res){
    res.sendFile(path.join(__dirname, '../../public/index.html')); //gets index page
  },

  signup: function(req,res){
    var message=req.flash('mess'); //gets message in request
     res.send(message); // send message
       
  },

  signIn: function(req,res){

    var message=req.flash('mess'); 
    res.send(message); //send success or failure message
  },

  signOut: function(req, res){
      
      req.logout();
      res.send('logout'); // send logout to trigger logout in front end
  }

}

module.exports = verificationController;
