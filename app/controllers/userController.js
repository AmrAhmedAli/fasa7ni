var Business=require('../models/Business');


var userController={

  
  viewBusinessPage: function(req,res)
  {
	Business.find({},function(err,docs)
			{ 
				res.render('business.ejs',{docs:docs});
			});
  }
  


}






module.exports = userController;
