var Business = require('../models/Business');
//var ServiceProviders = require('../models/ServiceProvider');



var serviceProviderController = {


addBusiness: function(req, res){
	//var flag = false;
 	//var Semail = req.user.email;
	//ServiceProviders.findOne({'email':Semail},function(err,user){
	//if(err)console.log(err);
	//if(!user){
	//	 flag = false;
	//}
	//else{  flag = true;
	//}
	//});
	//if(flag){
        var business = new Business();
        business.pname = req.body.pname;
        business.location = req.body.location;
        business.category = req.body.category;
        business.contactInfo.email = req.body.email;
	business.contactInfo.number = req.body.number;
        business.ageRequirement = req.body.ageRequirement;
        business.address = req.body.address;
        business.openingHours = req.body.openingHours;
        business.rate = req.body.rate;
	business.logo = req.body.logo;
	business.cancelingPolicy = req.body.cancelingPolicy;
	business.deadlinetoCancel = req.body.deadlinetoCancel;
	business.cancelingPenalty = req.body.cancelingPenalty;

        business.save(function(err){
            
		if (err) {
			//res.json(amr);
                 res.send("Cannot create");
                }else{
			
                    res.send("Created Successfuly");
                }
            });
	//}
    }


}
module.exports = serviceProviderController;
