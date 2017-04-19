var Business=require('../models/Business');
var ServiceProvider= require('../models/ServiceProvider');
var offers= require('../models/Offers');

var Cinema= require('../models/Cinema');
var Concert= require('../models/Concert');
var EscapeRoom= require('../models/EscapeRoom');
var Theatre= require('../models/Theatre');
var Malahy= require('../models/Malahy');
var Trampoline= require('../models/Trampoline');
var Fight=require('../models/Fight');
var Kora= require('../models/Kora');
var Race= require('../models/Race');
var review = require('../models/Reviews');
//var sendgrid = require('sendgrid')(saraelfakhrany,sara9659515436);

var serviceProviderController = {
postPicturesRedirect: function(req,res){
  console.log("In redirect");
  console.log(req.user);
  res.redirect('/postPictures');


},

  postPictures: function(req,res){
    console.log(req.user);
    var serviceProvider= req.user;

    if (serviceProvider.category ==='Cinema'){
      Cinema.findOne({'name': serviceProvider.businessName}, function(err,business){
        if (err)
          return res.send(err.message);
        else {
          business.photosURL=req.files.path;
          return res.send(business.photosURL);
        }
      })
    }
    if (serviceProvider.category ==='Concert'){
      Concert.findOne({'name': serviceProvider.businessName}, function(err,business){
        if (err)
          return res.send(err.message);
        else {
          business.photosURL=req.files.path;
          return res.send(business.photosURL);
        }
      })
    }
    if (serviceProvider.category ==='Escape Room'){
      EscapeRoom.findOne({'name': serviceProvider.businessName}, function(err,business){
        if (err)
          return res.send(err.message);
        else {
          business.photosURL=req.files.path;
          return res.send(business.photosURL);
        }
      })
    }
    if (serviceProvider.category ==='Malahy'){
      Malahy.findOne({'name': serviceProvider.businessName}, function(err,business){
        if (err)
          return res.send(err.message);
        else {
          business.photosURL=req.files.path;
          return res.send(business.photosURL);
        }
      })
    }
    if (serviceProvider.category ==='Trampoline'){
      Trampoline.findOne({'name': serviceProvider.businessName}, function(err,business){
        if (err)
          return res.send(err.message);
        else {
          business.photosURL=req.files.path;
          return res.send(business.photosURL);
        }
      })
    }
    if (serviceProvider.category ==='Fight'){
      Fight.findOne({'name': serviceProvider.businessName}, function(err,business){
        if (err)
          return res.send(err.message);
        else {
          business.photosURL=req.files.path;
          return res.send(business.photosURL);
        }
      })
    }
    if (serviceProvider.category ==='Kora'){
      Kora.findOne({'name': serviceProvider.businessName}, function(err,business){
        if (err)
          return res.send(err.message);
        else {
          business.photosURL=req.files.path;
          return res.send(business.photosURL);
        }
      })
    }
    if (serviceProvider.category ==='Race'){
      Race.findOne({'name': serviceProvider.businessName}, function(err,business){
        if (err)
          return res.send(err.message);
        else {
          business.photosURL=req.files.path;
          return res.send(business.photosURL);
        }
      })
    }
    if (serviceProvider.category ==='Theatre'){
      Theatre.findOne({'name': serviceProvider.businessName}, function(err,business){
        if (err)
          return res.send(err.message);
        else {
          business.photosURL=req.files.path;
          return res.send(business.photosURL);
        }
      })
    }





  },
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
			$set: {'cancelingPenalty' : cancelingPenalty}}, callback);	
		},
addReply : function(req, res){

		var reply = req.body.reply;
		var time = req.body.time;
		var title = req.body.title;

		req.checkBody('reply', ' ').notEmpty();
	
		user.update(({'time':time}, { 'title':title }),
			{$set: {'reply': reply}}, callback);
		},
viewUpdate : function(req,res){
	
				if(err) res.json(err);
				else res.render('update.ejs',{title:'Update'});
		},
	updateContactInfoNum : function(req, res){

		var name = req.user.name;
		var number = req.body.number;
		var oldNum = req.body.oldNum;	

		req.checkBody('number', 'New Number is required').notEmpty();

		Business.update({'name':name,"contactInfo.number":oldNum},{$set: {"contactInfo.number": number}},callback);
		
		},


updateContactInfoEmail : function(req, res){

		var name = req.user.name;
		var email = req.body.email;
		var oldEmail = req.body.oldEmail;	

		req.checkBody('email', 'New Email is required').notEmpty();

			Business.update({name:name,"contactInfo.email":oldEmail},{$set: {"contactInfo.email": email}}, callback);
	
		},

addContactInfoNum : function(req, res){

		var name = req.user.name;
		var number = req.body.number;
			

		req.checkBody('number', 'New Number is required').notEmpty();

		Business.update({'name':name},{$push:{"contactInfo.number":number}}, callback);
		
		},

addContactInfoEmail : function(req, res){

		var name = req.user.name;
		var email = req.body.email;
			

		req.checkBody('email', 'New Email is required').notEmpty();

		Business.update({name:name},{$push:{"contactInfo.email":email}}, callback);
		
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
},

getAllBookings:function(req, res){
      var x ;
      if(req.user.category=='Cinema')
      {
        {cinema.findOne({name:req.user.businessName},function(err, cinema){

            if(err)
                res.send(err.message);
            else if (!cinema)
            return res.status(401).send("No bookings are made yet");
            else{
                x=cinema.booked;
                res.render("viewBookings",{x})
              }
        })
    }
}


else if (req.user.category=='trampoline')
{trampoline.findOne({businessName:req.user.businessName},function(err, trampoline){

    if(err)
        res.send(err.message);
        else if (!trampoline){
        return res.status(401).send("No bookings are made yet");
      }
    else{
           x=trampoline.booked;
        res.render("viewBookings",{x})
      }
})
}
else if (req.user.category=='Kora')
{kora.findOne({businessName:req.user.businessName},function(err, kora){

    if(err)
        res.send(err.message);
        else if (!kora)
        return res.status(401).send("No bookings are made yet");
    else{
         x=kora.booked;
        res.render("viewBookings",{x})
      }
})
}

else if (req.user.category=='Fight')
{fight.findOne({name:req.user.businessName},function(err, fight){

    if(err)
        res.send(err.message);
        else if (!fight){
        return res.status(401).send("No bookings are made yet");}
    else{
      x=fight.booked;
        res.render("viewBookings",{x})
      }
})
}

else if (req.user.category=='Malahy')
{malahy.findOne({businessName:req.user.businessName},function(err, malahy){

    if(err)
        res.send(err.message);
    else if (!malahy){
        return res.status(401).send("No bookings are made yet");}
    else{
         x=malahy.booked;
        res.render("viewBookings",{x})
      }
})
}
else if (req.user.category=='Race')
{race.findOne({businessName:req.user.businessName},function(err, race){

    if(err)
        res.send(err.message);
        else if (!race){
        return res.status(401).send("No bookings are made yet");}
    else{
          x=race.booked;
        res.render("viewBookings",{x})
      }
})
}
else if (req.user.category=="Escape Room")
{escapeRoom.findOne({businessName:req.user.businessName},function(err, escapeRoom){

    if(err)
        res.send(err.message);
        else if (!escapeRoom){
        return res.status(401).send("No bookings are made yet");}
    else{
           x=escapeRoom.booked;
        res.render("viewBookings",{x});
      }

})

}

else if (req.user.category=='Theatre')
{theatre.findOne({name:req.user.businessName},function(err, theatre){

    if(err)
        res.send(err.message);
        else if (!theatre){
        return res.status(401).send("No bookings are made yet");}
    else{
        x=theatre.booked;
        res.render("viewBookings",{x})
      }
})
}

else if (req.user.category=='Concert')
{concert.findOne({name:req.user.businessName},function(err, concert){

    if(err)
        res.send(err.message);
        else if (!concert){
        return res.status(401).send("No bookings are made yet");}
    else{
        x=concert.booked;
        res.render("viewBookings",{x})
      }
})
}


},

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
	console.log("asdadsad");
        var business = new Business();
        business.name = req.body.name;
        business.location = req.body.location;
        business.category = req.body.category;
        business.contactInfo.email = req.body.emails;
	business.contactInfo.number = req.body.numbers;
        business.ageRequirement = req.body.ageRequirement;
        business.address = req.body.address;
        business.openingHours = req.body.openingHours;
	//business.logo = req.body.fd;
	business.cancelingPolicy = req.body.cancelingPolicy;
	business.deadlinetoCancel = req.body.deadlinetoCancel;
	business.cancelingPenalty = req.body.cancelingPenalty;
	console.log(business);
	

        business.save(function(err){
            
		if (err) {
			//res.json(amr);
                 console.log("Cannot create");
                }else{
			
                    console.log("Created Successfuly");
                }
            });
	//}
    }


/*sBookingCancel: function(req,res)
  {
    BookingHistory.remove({_id: ObjectId(req.params.id)},function(err,result){
			if(err)
			{
				console.log(err);
			}
			var sendgrid = require('sendgrid');
  			var sender = new sendgrid('saraelfakhrany','sara9659515436');
  			var toEmail = req.params.userEmail;
  			var mail = new sender.Email({
    			to: toEmail,
    			from: 'fasa7ni@gmail.com',
    			subject: 'Cancellation Confirmation',
    			text: 'The cancellation was done sucessfully'
  });
		});
  }*/
  /* WILL BE HANDLED IN THE FRONT END */


}

module.exports = serviceProviderController;
