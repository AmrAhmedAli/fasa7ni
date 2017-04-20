var User = require('../models/User');

var userController = {
	blockUser : function(req, res){

		var email;
		if(req.user){
		 email = req.user.email;}
		else{
		email = "test@test";
		}
		var blocked = req.body.blocked;

		
		User.findOneAndUpdate({'email' : email}, 
			{$set: {"blocked":blocked}},function(err,doc){
				if(err)console.log(err);
			});
		
		}
}

module.exports = userController;