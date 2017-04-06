var Admin=require('../models/Admin');
var User = require('../models/User');
var adminController={

  viewUsers: function(req,res){
	User.count(function(err,count)
			{

				if(!err && count ==0)
				{
					res.redirect('/NoUsers'); //sorry no users to display & back button
				}
			});
			User.find.sort
			(
					{"name":1},function(err,docs)
				{ 
					res.render('users.ejs',{docs:docs});
				}
			); 
  }

}






module.exports = adminController;
