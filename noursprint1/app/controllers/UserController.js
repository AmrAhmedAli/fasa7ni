var users = require('../models/User');

var userController = {
	updateUser : function(req, res){

		var email = req.user.email;
		var name = req.body.name;
		var password = req.body.password;
		var birthdate = req.body.birthdate;
		var gender = req.body.gender;
		var homelocation = req.body.homelocation;
		var contact = req.body.contact;
		var cardNumber = req.body.cardNumber;
		var holderName = req.body.holderName;
		var cvv = req.body.cvv;
		var validdate = req.body.validdate;

		req.checkBody('name', 'Name is required').notEmpty();
		req.checkBody('password', 'Password is required').notEmpty();
		req.checkBody('birthdate', 'Birthdate is required').notEmpty();

		user.update({'email' : email}, 
			{$set: {'name' : name},
			$set: {'password' : password},
			$set: {'birthdate' : birthdate},
			$set: {'gender' : gender},
			$set: {'homelocation' : homelocation},
			$set: {'contact' : contact},
			$set: {'cardNumber' : cardNumber},
			$set: {'holderName' : holderName},
			$set: {'cvv' : cvv},
			$set: {'validdate' : validdate}}, callback);
		
		}
}

module.exports = userController;