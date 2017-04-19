var Business=require('../models/Business');
var ServiceProvider= require('../models/ServiceProvider');

exports.viewBusinessPage= function(req,res)
  {
    console.log("I received a get request") 
	Business.find({},function(err,business)
			{ 
 
        console.log(business) ; 
			res.json(business) ;

      res.render('index2.html',{business});
			});
  },

  exports.addBusiness= function(req,res){


        var business = new Business();
        business.name = req.body.name;
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
                // res.send("Cannot create");
                 res.json(err);
                }else{
			
                    res.send("Created Successfuly");
                }
            });
	//}
    },

exports.updateBusiness =function(req, res){
		
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


		Business.update({'email' : email}, 
			{$set: {'location' : location},
			$set: {'contactInfoEmail' : contactInfoEmail},
			$set: {'contactInfoNumber' : contactInfoNumber},
			$set: {'ageRequirement' : ageRequirement},
			$set: {'address' : address},
			$set: {'openingHours' : openingHours},
			$set: {'logo' : logo},
			$set: {'cancelingPolicy' : cancelingPolicy},
			$set: {'deadlinetoCancel' : deadlinetoCancel},
			$set: {'cancelingPenalty' : cancelingPenalty}}, callback),function(err,result){

                if(err)
                res.send(err) ; 

                else
                res.json(result); 
            }	
};

