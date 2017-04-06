var offers= require('../models/Offers');
var Bussiness = require('../models/Business');



var serviceProviderController = {

	viewUpdate : function(req,res){
	
				if(err) res.json(err);
				else res.render('update.ejs',{title:'Update'});
		},
	updateContactInfoNum : function(req, res){

		var name = req.user.name;
		var number = req.body.number;
		var oldNum = req.body.oldNum;	

		req.checkBody('number', 'New Number is required').notEmpty();

		Bussiness.update({'name':name,"contactInfo.number":oldNum},{$set: {"contactInfo.number": number}},callback);
		
		},


updateContactInfoEmail : function(req, res){

		var name = req.user.name;
		var email = req.body.email;
		var oldEmail = req.body.oldEmail;	

		req.checkBody('email', 'New Email is required').notEmpty();

			Bussiness.update({name:name,"contactInfo.email":oldEmail},{$set: {"contactInfo.email": email}}, callback);
	
		},

addContactInfoNum : function(req, res){

		var name = req.user.name;
		var number = req.body.number;
			

		req.checkBody('number', 'New Number is required').notEmpty();

		Bussiness.update({'name':name},{$push:{"contactInfo.number":number}}, callback);
		
		},

addContactInfoEmail : function(req, res){

		var name = req.user.name;
		var email = req.body.email;
			

		req.checkBody('email', 'New Email is required').notEmpty();

		Bussiness.update({name:name},{$push:{"contactInfo.email":email}}, callback);
		
		},

viewOffers : function(req,res){
	
			offers.find({},function (err, docs) {

				if(err) res.json(err);
				else res.render('offers.ejs',{title:'Available offers',offer:docs});

			});
		},
postOffers : function(req,res){

	 req.checkBody('businessName', 'businessName is required').notEmpty();
	 req.checkBody('category', 'Category is required').notEmpty();
	 req.checkBody('description', 'description is required').notEmpty();
	 req.checkBody('validTill', 'validTill is required').notEmpty();
	
	var errors =req.validationErrors();
		console.log(req.body.businessName);
		

		if (errors)
		{
			console.log("err");
			offers.find(function (err, docs) {


				if(err) res.json(err);
				else res.render('offers.ejs',{title:'Available offers',offer:docs,errors: errors});
	    	

			});
			
		}else
			{
							console.log("succ");
		
		var newOffer= {
					  businessName:req.body.businessName,
					  description:req.body.description,
				      category:req.body.category,
					  validTill:req.body.validTill

						}
				offers.insert(newOffer,function(err,res){
					if(err)
					{
							console.log(err);
					}
					res.redirect('/offers');

				});	
}
}
	}

module.exports = serviceProviderController;