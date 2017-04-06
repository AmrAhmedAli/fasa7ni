var business = require('../models/Business');

var businessController = {
	updateBusiness : function(req, res){
		
		var email = req.user.email;
		var name = req.body.name;
		var location = req.body.location;
		var contactInfoEmail = req.body.email;
		var contactInfoNumber = req.body.number;
		var ageRequirement = req.body.ageRequirement;
		var address = req.body.address;
		var openingHours = req.body.openingHours;
		var logo = req.body.logo;
		var cancelingPolicy = req.body.cancelingPolicy;
		var deadlinetoCancel = req.body.deadlinetoCancel;
		var cancelingPenalty = req.body.cancelingPenalty;

		req.checkBody('location', 'Location is required').notEmpty();
		req.checkBody('contactInfoEmail', 'Email is required').notEmpty();
		req.checkBody('contactInfoNumber', 'Number is required').notEmpty();
		req.checkBody('ageRequirement', 'Age is required').notEmpty();
		req.checkBody('address', 'Address is required').notEmpty();
		req.checkBody('openingHours', 'Opening hours is required').notEmpty();
		req.checkBody('cancelingPolicy', 'Canceling Policy is required').notEmpty();
		req.checkBody('deadlinetoCancel', 'Deadline to Cancel is required').notEmpty();
		req.checkBody('cancelingPenalty', 'Canceling Penalty is required').notEmpty();


		business.update({'email' : email}, 
			{$set: {'location' : location},
			$set: {'contactInfoEmail' : contactInfoEmail},
			$set: {'contactInfoNumber' : contactInfoNumber},
			$set: {'ageRequirement' : ageRequirement},
			$set: {'address' : address},
			$set: {'openingHours' : openingHours},
			$set: {'logo' : logo},
			$set: {'cancelingPolicy' : cancelingPolicy},
			$set: {'deadlinetoCancel' : deadlinetoCancel},
			$set: {'cancelingPenalty' : cancelingPenalty}}, callback);	
		}
}

module.exports = businessController;