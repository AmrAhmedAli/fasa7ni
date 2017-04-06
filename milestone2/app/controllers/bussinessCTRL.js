var Bussiness = require('../models/Bussiness');

var userController = {
	
	updateContactInfoNum : function(req, res){

		var name = req.user.name;
		var number = req.body.number;
		var oldNum = req.body.oldNum;	

		req.checkBody('number', 'New Number is required').notEmpty();

		Bussiness.update({name:name,contactInfo.number:oldNum},{$set: {contactInfo.number: number}},callback);
		
		}


updateContactInfoEmail : function(req, res){

		var name = req.user.name;
		var email = req.body.email;
		var oldEmail = req.body.oldEmail;	

		req.checkBody('email', 'New Email is required').notEmpty();

			Bussiness.update({name:name,contactInfo.email:oldEmail},{$set: {contactInfo.email: email}}, callback);
	
		}

addContactInfoNum : function(req, res){

		var name = req.user.name;
		var number = req.body.number;
			

		req.checkBody('number', 'New Number is required').notEmpty();

		Bussiness.update({name:name}, {contactInfo.number.push(number)}, callback);
		
		}

addContactInfoEmail : function(req, res){

		var name = req.user.name;
		var email = req.body.email;
			

		req.checkBody('email', 'New Email is required').notEmpty();

		Bussiness.update({name:name},{contactInfo.email.push(email)}, callback);
		
		}

module.exports = userController;