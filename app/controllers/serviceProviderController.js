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

	viewBusinessProfile: function(req,res){
		var email;
		if(req.user){
		 email = req.user.email;}
		else{
		email = "test@test";
		}
		Business.findOne({'email' : email},function(err,doc){
				if(err)console.log(err);
				else res.json(doc);
			});
	},
updateBusiness : function(req, res){
		
		var email ;
		if(req.user){
		 email = req.user.email;}
		else{
		email = "test@test";
		}
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

	/*	req.checkBody('location', 'Location is required').notEmpty();
		req.checkBody('contactInfoEmail', 'Email is required').notEmpty();
		req.checkBody('contactInfoNumber', 'Number is required').notEmpty();
		req.checkBody('ageRequirement', 'Age is required').notEmpty();
		req.checkBody('address', 'Address is required').notEmpty();
		req.checkBody('openingHours', 'Opening hours is required').notEmpty();
		req.checkBody('cancelingPolicy', 'Canceling Policy is required').notEmpty();
		req.checkBody('deadlinetoCancel', 'Deadline to Cancel is required').notEmpty();
		req.checkBody('cancelingPenalty', 'Canceling Penalty is required').notEmpty(); */

		var updateBusiness = {email : email, 
			location : location,
			contactInfo : contactInfoEmail,
			contactInfo : contactInfoNumber,
			ageRequirement : ageRequirement,
			address : address,
			openingHours : openingHours,
			logo : logo,
			cancelingPolicy : cancelingPolicy,
			deadlinetoCancel : deadlinetoCancel,
			cancelingPenalty : cancelingPenalty,
			name : name};

			business.findOneAndUpdate({'email' : email}, 
			{$set: updateBusiness},function(err,doc){
				if(err)console.log(err);
			});
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

    		//var name = req.user.name;
    		var name = 'Breakout';
    		var number = req.body.number;
    		var oldNum = req.body.oldNum;

    		//req.checkBody('number', 'New Number is required').notEmpty();

    		Business.update({'name':name,"contactInfo.number":oldNum},{$set: {"contactInfo.number": number}},function(err,doc){
    		if(err)console.log(err);
    		else console.log('Added');
    		});

    		},


    updateContactInfoEmail : function(req, res){

    		//var name = req.user.name;
    		var name = 'Breakout';
    		var email = req.body.email;
    		var oldEmail = req.body.oldEmail;

    		//req.checkBody('email', 'New Email is required').notEmpty();

    			Business.update({name:name,"contactInfo.email":oldEmail},{$set: {"contactInfo.email": email}}, function(err,doc){
    		if(err)console.log(err);
    		else console.log('Added');
    		});

    		},

    addContactInfoNum : function(req, res){
    	console.log('hna');
    		//var name = req.user.name;
    		var name = 'Breakout';
    		var number = req.body.number;


    		//req.checkBody('number', 'New Number is required').notEmpty();

    		Business.update({'name':name},{$push:{"contactInfo.number":number}}, function(err,doc){
    		if(err)console.log(err);
    		else console.log('Added');
    		});

    		},

    addContactInfoEmail : function(req, res){

    		//var name = req.user.name;
    		var name = 'Breakout';
    		var email = req.body.email;


    		//req.checkBody('email', 'New Email is required').notEmpty();

    		Business.update({name:name},{$push:{"contactInfo.email":email}}, function(err,doc){
    		if(err)console.log(err);
    		else console.log('Added');
    		});

    		},


viewOffers : function(req,res){

			offers.find({},function (err, docs) {

				if(err) res.json(err);
				else res.render('offers.ejs',{title:'Available offers',offer:docs});

			});
		},
   postOffers : function(req,res){

	// req.checkBody(req.body.businessName, 'businessName is required').notEmpty();
	 //req.checkBody(req.body.category, 'Category is required').notEmpty();
	 //req.checkBody(req.body.description, 'description is required').notEmpty();
	 //req.checkBody(req.body.validTill, 'validTill is required').notEmpty();
 
   

	
		
		var newOffer= new offers({
					businessName: req.body.businessName,
					  description: req.body.description,
				      category: req.body.category,
					 validTill: req.body.validTill });

				newOffer.save(function(err){
					if(err) console.log(err);
					else{console.log("Done")}});	
        req.flash('success_msg','your offer is now posted');
        //var message = success_msg; 
        //res.send(message);

},

getAllBookings:function(req, res){
      var x ;
      var a=[];

     if(req.user.category=='Cinema')
      {

        {Cinema.findOne({name:req.user.businessName},function(err, cinema){
            x=cinema.booked;
            if(err)
                res.send(err.message);
            else if (x.length==0){
            a[0]="No bookings are made yet";
             res.json(a);
           }
            else{

                a[0]=x;
                a[1]=req.user.category;
             res.json(a);
              }
        })
    }
}


else if (req.user.category=='Trampoline')
{Trampoline.findOne({businessName:req.user.businessName},function(err, trampoline){
   x=trampoline.booked;
    if(err)
        res.send(err.message);
        else if (x.length==0){
        a[0]="No bookings are made yet";
         res.json(a);
       }
    else{

           a[0]=x;
           a[1]=req.user.category;
        res.json(a);
      }
})
}
else if (req.user.category=='Kora')
{Kora.findOne({businessName:req.user.businessName},function(err, kora){

  x=kora.booked;
   if(err)
       res.send(err.message);
       else if (x.length==0){
       a[0]="No bookings are made yet";
        res.json(a);
      }
    else{

         a[0]=x;
         a[1]=req.user.category;
      res.json(a);
      }
})
}

else if (req.user.category=='Fight')
{Fight.findOne({name:req.user.businessName},function(err, fight){

  x=fight.booked;
   if(err)
       res.send(err.message);
       else if (x.length==0){
       a[0]="No bookings are made yet";
        res.json(a);
      }
    else{

      a[0]=x;
      a[1]=req.user.category;
   res.json(a);
      }
})
}

else if (req.user.category=='Malahy')
{Malahy.findOne({businessName:req.user.businessName},function(err, malahy){

  x=malahy.booked;
   if(err)
       res.send(err.message);
       else if (x.length==0){
       a[0]="No bookings are made yet";
        res.json(a);
      }
    else{

         a[0]=x;
         a[1]=req.user.category;
      res.json(a);
      }
})
}
else if (req.user.category=='Race')
{Race.findOne({businessName:req.user.businessName},function(err, race){

  x=race.booked;
   if(err)
       res.send(err.message);
       else if (x.length==0){
       a[0]="No bookings are made yet";
        res.json(a);
      }
    else{

          a[0]=x;
          a[1]=req.user.category;
       res.json(a);
      }
})
}
else if (req.user.category=="Escape Room")
{EscapeRoom.findOne({businessName:req.user.businessName},function(err, escapeRoom){

  x=escapeRoom.booked;
   if(err)
       res.send(err.message);
       else if (x.length==0){
       a[0]="No bookings are made yet";
        res.json(a);
      }
    else{

           a[0]=x;
           a[1]=req.user.category;
        res.json(a);
      }

})

}

else if (req.user.category=='Theatre')
{Theatre.findOne({name:req.user.businessName},function(err, theatre){

  x=theatre.booked;
   if(err)
       res.send(err.message);
       else if (x.length==0){
       a[0]="No bookings are made yet";
        res.json(a);
      }
    else{

        a[0]=x;
        a[1]=req.user.category;
     res.json(a);
      }
})
}

else if (req.user.category=='Concert')
{Concert.findOne({name:req.user.businessName},function(err, concert){

  x=concert.booked;
   if(err)
       res.send(err.message);
       else if (x.length==0){
       a[0]="No bookings are made yet";
        res.json(a);
      }
    else{
        
        a[0]=x;
        a[1]=req.user.category;
     res.json(a);
      }
})
}


},


addBusiness: function(req, res){

	
	var emails = req.body.emails;
	emails = emails.split(/\r?\n/);

	var number = req.body.numbers;
	number = number.split(/\r?\n/);
	
	var cat = req.body.category;

        var business = new Business();
        business.name = req.body.name;
        business.location = req.body.location;
        business.category = req.body.category;
        business.contactInfo.email = emails;
	business.contactInfo.number = number;
        business.ageRequirement = req.body.ageRequirement;
        business.address = req.body.address;
        business.openingHours = req.body.openingHours;
	//business.logo = req.body.fd;
	business.cancelingPolicy = req.body.cancelingPolicy;
	business.deadlinetoCancel = req.body.deadlinetoCancel;
	business.cancelingPenalty = req.body.cancelingPenalty;
	
	

        business.save(function(err){
            
		if (err) {
			res.json({success:false, message:"This Form was not submitted, You Either entered a notvalid data format or there is an existing business with the same Name"});
                }else{
			res.json({success:true, message:"Your Form is submitted successfuly!, Now you can add details to your category"});
                }
            });

	if(cat == "Cinema"){
	var cinema = new Cinema();
	cinema.name = req.body.name;
	cinema.save();
	}
	if(cat == "Concert"){
	var concert = new Concert();
	concert.businessName = req.body.name;
	concert.save();
	}
	if(cat == "Escape Room"){
	var escapee = new EscapeRoom();
	escapee.name = req.body.name;
	escapee.save();
	}
	if(cat == "Theater"){
	var theater = new Theatre();
	theater.name = req.body.name;
	theater.save();
	}
	if(cat == "Malahy"){
	var malahy = new Malahy();
	malahy.businessName = req.body.name;
	malahy.save();
	}
	if(cat == "Trampoline"){
	var trampoline = new Trampoline();
	trampoline.businessName = req.body.name;
	trampoline.save();
	}
	if(cat == "Fight"){
	var fight = new Fight();
	fight.name = req.body.name;
	fight.save();
	}
	if(cat == "Kora"){
	var kora = new Kora();
	kora.businessName = req.body.name;
	kora.save();
	}
	if(cat == "Race"){
	var race = new Race();
	race.businessName = req.body.name;
	race.save();
	}



	//}
    },
getServiceP : function(req, res){

var service;
console.log(req.user);
if(req.user){
	 service = req.user.email;
	
	ServiceProvider.findOne({'email':service},
			 function(err,doc){
				if(err)res.json(err);
				else
				res.json(doc);
			});
}


},
updateCinema : function(req, res){

    //var name = req.user.name;
    var name = 'Breakout';
    var screenName = req.body.screenName;
    var screenMovie = req.body.screenMovie;
    var screenSeats = req.body.screenSeats;
    var screenTimeSlot = req.body.screenTimeSlot;
    var price = req.body.price;
	var seats = screenSeats;
	seats = seats.split(',');
   	 var TS= screenTimeSlot
	TS=TS.split(',');


    Cinema.update({name:name},{$push:{"screenNumber":{
                                    name: screenName,
                                    movies: screenMovie,
                                    seats: seats,
                                     timeSlots:TS}},
			                          $set:{"price":price}}, function(err,doc){
    if(err)console.log(err);
    else console.log('Added');
    });

  },

updateConcerts: function(req, res){

    //var name = req.user.name;
    var name = 'RANA';
    var eventName = req.body.eventName;
    var timeSlot = req.body.timeSlot;
    var eventDate = req.body.eventDate;
    var price = req.body.price;

   Concert.update({businessName:name},{ $set:{"eventName":eventName},
                                        $set:{"timeSlot":timeSlot},
                                        $set:{"eventDate":eventDate},
                                        $set:{"price":price}}, function(err,doc){
    if(err)console.log(err);
    else console.log('Added');
    });

    },
updateEscapeRooms: function(req, res){
    //var name = req.user.name;
    var name = 'Breakout';
    var roomName = req.body.roomName;
    var roomPrice = req.body.roomPrice;
    var roomTS = req.body.roomTS;
    var roomMinAge = req.body.roomMinAge;
    var roomMinteam = req.body.roomMinteam;
    var roomMaxTeam = req.body.roomMaxTeam;
   var TS= roomTS
 	TS=TS.split(',');

    EscapeRoom.update({name:name},{$push:{"room":{
                                    name: roomName,
                                    price: roomPrice,
                                    timeSlots: TS,
                                     minAge:roomMinAge,
                                    minAgeNumber:roomMinteam,
                                  maxTeamNumber:roomMaxTeam}}}, function(err,doc){
    if(err)console.log(err);
    else console.log('Added');
    });

    },

updateFight: function(req, res){
    //var name = req.user.name;
    var name = 'Breakout';
    var gameName = req.body.gameName;
    var gameFieldTS = req.body.gameFieldTS;
    var gamePrice = req.body.gamePrice;
    var gameMinAge = req.body.gameMinAge;
    var gameMinteam = req.body.gameMinteam;
    var gameMaxTeam = req.body.gameMaxTeam;
    var gameTS = req.body.gameTS;
    var TS = gameFieldTS
    var TS1 = gameTS
    TS1 = TS1.split(',');
    TS = TS.split(',');

    Fight.update({name:name},{$push:{"game":{
                               name: gameName,
                               fields: TS,
                               price: gamePrice,
                               minAge: gameMinAge,
                               teamMinNumber: gameMinteam,
                               teammaxNumber: gameMaxTeam,
                               timeSlots: TS1}}}, function(err,doc){
    if(err)console.log(err);
    else console.log('Added');
    });

    },
updateKora: function(req, res){
    //var name = req.user.name;
    var name = 'Breakout';
    var fieldName = req.body.fieldName;
    var fieldAVSlots = req.body.fieldAVSlots;
    var price = req.body.price;


    Kora.update({businessName:name},{$push:{"name":fieldName},
                                     $push:{"availableSlots":fieldAVSlots},
                                     $set:{"price":price}}, function(err,doc){
    if(err)console.log(err);
    else console.log('Added');
    });

    },

updateRace: function(req, res){
    //var name = req.user.name;
    var name = 'Breakout';
    var maxNumberOfCarts = req.body.maxNumberOfCarts;
    var availableSlots = req.body.availableSlots;
    var minNumberOfPeople = req.body.minNumberOfPeople;
    var price = req.body.price;

    Race.update({businessName:name},{$set:{"maxNumberOfCarts":maxNumberOfCarts},
                                     $push:{"availableSlots":availableSlots},
                                     $set:{"price":price},
                                     $set:{"minNumberOfPeople":minNumberOfPeople}}, function(err,doc){
    if(err)console.log(err);
    else console.log('Added');
    });

    },

updateTrampoline: function(req, res){
    //var name = req.user.name;
    var name = 'Breakout';
    var timeSlots = req.body.timeSlots;
    var price = req.body.price;


    Trampoline.update({businessName:name},{$push:{"timeSlots":timeSlots},
                                           $set:{"price":price}}, function(err,doc){
    if(err)console.log(err);
    else console.log('Added');
    });

    },

addReply : function(req, res){

		var reply = req.body.reply;
		var id = req.body.id;
		
		//req.checkBody('reply', ' ').notEmpty();
	
		review.findOneAndUpdate({'_id':id},
			{$set: {'reply': reply}}, function(err,doc){
				if(err)console.log(err);
				console.log(doc);
			});
		},

	viewSreviews : function(req, res){


		if(req.user){
		var businessName = req.user.businessName;}
		else{
		var businessName = "BreakOut";
		}
		
		
		review.findOne({'businessName':businessName},
			 function(err,doc){
				if(err)res.json(err);
				else
				res.json(doc);
			});
		},




updateMalahy: function(req, res){
    //var name = req.user.name;
    var name = 'Breakout';
    var ticketType = req.body.ticketType;
    var ticketGamesTS = req.body.ticketGamesTS;
    var ticketPrice = req.body.ticketPrice;
    var malahyType = req.body.malahyType;
    var TS = ticketGamesTS
    TS = TS.split(',')


    Malahy.update({businessName:name},{$push:{"tickets":{
                                      ticketType: ticketType,
                                      games: TS,
                                      price:ticketPrice}},
                                      $set:{"malahyType":malahyType}}, function(err,doc){
    if(err)console.log(err);
    else console.log('Added');
    });

    },
updateTheatre: function(req, res){
    //var name = req.user.name;
    var name = 'Breakout';
    var hallName = req.body.hallName;
    var hallSeatsTS = req.body.hallSeatsTS;
    var hallShows = req.body.hallShows;
    var hallTSTS = req.body.hallTSTS;
    var Price = req.body.Price;
    var TS = hallSeatsTS
    var TS1 = hallTSTS
    TS = TS.split(',')
    TS1 = TS1.split(',')


    Theatre.update({name:name},{$push:{"hall":{
                                name:hallName,
                                shows: hallShows,
                                seats: TS,
                                timeSlots: TS1},
                                $set:{"price":Price}}}, function(err,doc){
    if(err)console.log(err);
    else console.log('Added');
    });

    },


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




 updateCinema : function(req, res){

        //var name = req.user.businessName;
    	var name = 'Breakout';
    	var screenName = req.body.screenName;
    	var screenMovie = req.body.screenMovie;
    	var screenSeats = req.body.screenSeats;
    	var screenTimeSlot = req.body.screenTimeSlot;
    	var price = req.body.price;
		var seats = screenSeats;
		seats = seats.split(',');
   	 	var TS= screenTimeSlot;
		TS=TS.split(',');
	
    	Cinema.update({name:name},{$push:{"screenNumber":{
                                   		   name: screenName,
                                    	   movies: screenMovie,
                                    	   seats: seats,
                                    	   timeSlots:TS}},
			                       $set:{"price":price}}, function(err,doc){
  		                                if(err)console.log(err);
    	                                else console.log('Added');
                                    });

    },
  
	updateConcerts: function(req, res){

   		//var name = req.user.businessName;
    	var name = 'RANA';
    	var eventName = req.body.eventName;
    	var timeSlot = req.body.timeSlot;
    	var eventDate = req.body.eventDate;
    	var price = req.body.price;

      var newConcert = {eventName : eventName,
                        timeSlot : timeSlot,
                        eventDate : eventDate,
                        price : price};

   		Concert.update({'name':name},{ $set:newConcert}, function(err,doc){
   		                                       if(err){console.log(err)}
    	                                       else {console.log('Added')}
                                             });
    
    },

	updateEscapeRooms: function(req, res){

    	//var name = req.user.businessName;
    	var name = 'Breakout';
    	var roomName = req.body.roomName;
    	var roomPrice = req.body.roomPrice;
    	var roomTS = req.body.roomTS;
    	var roomMinAge = req.body.roomMinAge;
    	var roomMinteam = req.body.roomMinteam;
    	var roomMaxTeam = req.body.roomMaxTeam;
   		var TS= roomTS;
 		   TS=TS.split(',');

    	EscapeRoom.update({'name':name},{$push:{"room":{
                                   		name: roomName,
                                    	price: roomPrice,
                                    	timeSlots: TS,
                                     	minAge:roomMinAge,
                                    	minAgeNumber:roomMinteam,
                                  		maxTeamNumber:roomMaxTeam}}}, function(err,doc){
    	                                   if(err){console.log(err)}
    	                                   else {console.log('Added')}
                                        });
    
    },

	updateFight: function(req, res){

    	//var name = req.user.businessName;
    	var name = 'Breakout';
    	var gameName = req.body.gameName;
    	var gameFieldTS = req.body.gameFieldTS;
    	var gamePrice = req.body.gamePrice;
    	var gameMinAge = req.body.gameMinAge;
    	var gameMinteam = req.body.gameMinteam;
    	var gameMaxTeam = req.body.gameMaxTeam;
    	var gameTS = req.body.gameTS;
    	var TS = gameFieldTS
    	var TS1 = gameTS
    	TS1 = TS1.split(',');
    	TS = TS.split(','); 

    	Fight.update({name:name},{$push:{"game":{
                               		name: gameName,
                               		fields: TS,
                               		price: gamePrice,
                               		minAge: gameMinAge,
                               		teamMinNumber: gameMinteam,
                               		teammaxNumber: gameMaxTeam,
                               		timeSlots: TS1}}}, function(err,doc){
    	                               if(err){console.log(err)}
    	                               else {console.log('Added')}
                                    });
    
    },

	updateKora: function(req, res){
     
    	//var name = req.user.businessName;
    	var name = 'Breakout';
    	var fieldName = req.body.fieldName;
    	var fieldAVSlots = req.body.fieldAVSlots;
    	var price = req.body.price;
      var TS = fieldAVSlots
      TS = TS.split(',');
    
    	Kora.update({businessName:name},{$push:{"fields":{
                                       name:fieldName,
                                     	 availableSlots:TS}},
                                     	 $set:{"price":price}},function(err,doc){
    	                                   if(err){console.log(err)}
    	                                   else {console.log(doc)}
                                         });
    
    },

    updateMalahy: function(req, res){
      
    	//var name = req.user.businessName;
    	var name = 'Breakout';
    	var ticketType = req.body.ticketType;
    	var ticketGamesTS = req.body.ticketGamesTS;
    	var ticketPrice = req.body.ticketPrice;
    	var malahyType = req.body.malahyType;
    	var TS = ticketGamesTS
    	TS = TS.split(',') 

   		Malahy.update({businessName : name},{$push:{"tickets":{
                                      			ticketType: ticketType,
                                      			games: TS,
                                      			price:ticketPrice}},
                                      		$set:{"malahyType":malahyType}}, function(err,doc){
    	                                       if(err){console.log(err)}
    	                                       else {console.log('Added')}
                                            });
    
    },

	updateRace: function(req, res){

    	//var name = req.user.businessName;
    	var name = 'Breakout';
    	var maxNumberOfCarts = req.body.maxNumberOfCarts;
    	var availableSlots = req.body.availableSlots;
    	var minNumberOfPeople = req.body.minNumberOfPeople;
    	var price = req.body.price;

    	Race.update({businessName:name},{$set:{"maxNumberOfCarts":maxNumberOfCarts},
                                     	 $push:{"availableSlots":availableSlots},
                                     	 $set:{"price":price},
                                     	 $set:{"minNumberOfPeople":minNumberOfPeople}}, function(err,doc){
    	                                   if(err)console.log(err);
    	                                   else console.log('Added');
                                        });
    
    },

    updateTheatre: function(req, res){

   		 //var name = req.user.businessName;
    	var name = 'Breakout';
    	var hallName = req.body.hallName;
    	var hallSeatsTS = req.body.hallSeatsTS;
    	var hallShows = req.body.hallShows;
    	var hallTSTS = req.body.hallTSTS;
    	var Price = req.body.Price;
    	var TS = hallSeatsTS
    	var TS1 = hallTSTS
    	TS = TS.split(',')
    	TS1 = TS1.split(',')
     
    	Theatre.update({name:name},{$push:{"hall":{
                                		name:hallName,
                                		shows: hallShows,
                                		seats: TS,
                                		timeSlots: TS1},           
                                	$set:{"price":Price}}}, function(err,doc){
    	                               if(err)console.log(err);
    	                               else console.log('Added');
                                    });
    
    },

	updateTrampoline: function(req, res){

    	//var name = req.user.businessName;
    	var name = 'Breakout';
    	var timeSlots = req.body.timeSlots;
    	var price = req.body.price; 

    	Trampoline.update({businessName:name},{$push:{"timeSlots":timeSlots},
                                           	   $set:{"price":price}}, function(err,doc){
    	                                           if(err)console.log(err);
    	                                           else console.log('Added');
                                                });
    
    }

}

module.exports = serviceProviderController;
