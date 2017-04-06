var Business=require('../models/Business');

var userController={

  search: function(req, res){

    var businessName=req.body.businessName;

    Business.findOne({'name':businessName}, function(err, business){
      if (err)
        return res.send(err.message);
      if(!business)
        return res.send('No business found');
      return res.send(business);
    })


  },

  filterByLocation: function(req,res){

    var location= req.body.location;

    Business.find({'location':location}, function(err,business){
      if (err)
        return (err);
      if (!business)
          return res.send('No business found');
      return res.send(business);
    })
  },

  filterByAge: function(req,res){
    var age=req.body.age;

    Business.find({'ageRequirement':age}, function(err, business){
      if (err)
        return (err.message);
      if(!business)
          return res.send('No business found');
      return res.send(business);
    })
  },

  


}






module.exports = userController;
