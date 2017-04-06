var User = require('../models/User');

var userController = {
	blockUser : function(req, res){

		var email = req.User.email;
		var blocked = req.body.blocked;

		User.update({ 'email':email }, 
			{$set: {'blocked': 'true'}}, callback);
		
		}
}

module.exports = userController;