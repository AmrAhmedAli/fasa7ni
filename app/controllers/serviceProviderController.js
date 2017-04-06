var Business=require('../models/Business');
var ServiceProvider= require('../models/ServiceProvider');

var Cinema= require('../models/Cinema');
var Concert= require('../models/Concert');
var EscapeRoom= require('../models/EscapeRoom');
var Theatre= require('../models/Theatre');
var Malahy= require('../models/Malahy');
var Trampoline= require('../models/Trampoline');
var Fight=require('../models/Fight');
var Kora= require('../models/Kora');
var Race= require('../models/Race');

var serviceProviderController = {
postPicturesRedirect: function(req,res){
  console.log("In redirect");
  console.log(req.user);
  res.redirect('/postPictures');


},

  postPictures: function(req,res){
    console.log(req.user);
    var serviceProvider= req.user;

    if (serviceProvider.category ==='Cinema'){
      Cinema.findOne({'name': serviceProvider.businessName}, function(err,business){
        if (err)
          return res.send(err.message);
        else {
          business.photosURL=req.files.path;
          return res.send(business.photosURL);
        }
      })
    }
    if (serviceProvider.category ==='Concert'){
      Concert.findOne({'name': serviceProvider.businessName}, function(err,business){
        if (err)
          return res.send(err.message);
        else {
          business.photosURL=req.files.path;
          return res.send(business.photosURL);
        }
      })
    }
    if (serviceProvider.category ==='Escape Room'){
      EscapeRoom.findOne({'name': serviceProvider.businessName}, function(err,business){
        if (err)
          return res.send(err.message);
        else {
          business.photosURL=req.files.path;
          return res.send(business.photosURL);
        }
      })
    }
    if (serviceProvider.category ==='Malahy'){
      Malahy.findOne({'name': serviceProvider.businessName}, function(err,business){
        if (err)
          return res.send(err.message);
        else {
          business.photosURL=req.files.path;
          return res.send(business.photosURL);
        }
      })
    }
    if (serviceProvider.category ==='Trampoline'){
      Trampoline.findOne({'name': serviceProvider.businessName}, function(err,business){
        if (err)
          return res.send(err.message);
        else {
          business.photosURL=req.files.path;
          return res.send(business.photosURL);
        }
      })
    }
    if (serviceProvider.category ==='Fight'){
      Fight.findOne({'name': serviceProvider.businessName}, function(err,business){
        if (err)
          return res.send(err.message);
        else {
          business.photosURL=req.files.path;
          return res.send(business.photosURL);
        }
      })
    }
    if (serviceProvider.category ==='Kora'){
      Kora.findOne({'name': serviceProvider.businessName}, function(err,business){
        if (err)
          return res.send(err.message);
        else {
          business.photosURL=req.files.path;
          return res.send(business.photosURL);
        }
      })
    }
    if (serviceProvider.category ==='Race'){
      Race.findOne({'name': serviceProvider.businessName}, function(err,business){
        if (err)
          return res.send(err.message);
        else {
          business.photosURL=req.files.path;
          return res.send(business.photosURL);
        }
      })
    }
    if (serviceProvider.category ==='Theatre'){
      Theatre.findOne({'name': serviceProvider.businessName}, function(err,business){
        if (err)
          return res.send(err.message);
        else {
          business.photosURL=req.files.path;
          return res.send(business.photosURL);
        }
      })
    }





  }


}

module.exports = serviceProviderController;
