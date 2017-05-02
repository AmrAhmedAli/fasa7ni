var Business=require('../models/Business');
var ServiceProvider= require('../models/ServiceProvider');
var offers= require('../models/Offers');
var BookingHistory= require('../models/BookingHistory');

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


},newBooks : function(req,res){
	BookingHistory.find({'busname':req.user.businessName},function(err, r){
			res.send(r);
	}

	);
},
	stat : function(req,res){
		if(req.body.typee =="cancel"){
			BookingHistory.findOneAndUpdate({'_id': req.body.Bid},{'status':'Canceled'},function(err,r){
				if(err){
					console.log(err)
				}
				else{
					res.json("success");					
				}
			});
		}
		else{
			BookingHistory.findOneAndUpdate({'_id': req.body.Bid},{'status':'Completed'},function(err,r){
				if(err){
					console.log(err)
				}
				else{
					res.json("success");					
				}
			});
		}
		
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

	// as a service provider i can view my business page info
	viewBusinessProfile: function(req,res){
		var businessName;
		if(req.user){
		 businessName = req.user.businessName;}
		else{
		businessName = "BreakOut";
		}
		// search the database for the signed in service provider by the name
		Business.findOne({'name' : businessName},function(err,doc){
				if(err)console.log(err);
				else res.json(doc);
			});
	},
	
	// as a service provider i can update my business profile info
	updateBusiness : function(req, res){
		
		var businessName ;
		if(req.user){
		 businessName = req.user.businessName;
		cat = req.user.category;			
		}
		else{
		businessName = "breakOut";
		}
		var name = req.body.name; //update business name
		var location = req.body.location; //update business location
		var contactInfoEmail = req.body.email; //update business email
		var contactInfoNumber = req.body.number; //update business phone number
		var ageRequirement = req.body.ageRequirement; //update business age requirement
		var address = req.body.address; //update business address
		var openingHours = req.body.openingHours; //update business opening hours
		var logo = req.body.logo; //update business logo
		var cancelingPolicy = req.body.cancelingPolicy; //update business canceling policy
		var deadlinetoCancel = req.body.deadlinetoCancel; //update business deadline to cancel
		var cancelingPenalty = req.body.cancelingPenalty; //update business canceling penalty

	
		var updateBusiness = { 
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
			
			// search the database for the signed in service provider and update the entered data
			Business.findOneAndUpdate({'name' : businessName}, 
			{$set: updateBusiness},function(err,doc){
				if(err)console.log(err);
			});

	if(cat == "Cinema"){
	var updateCats = { 
			name : name};

			Cinema.findOneAndUpdate({'name' : businessName}, 
			{$set: updateCats},function(err,doc){
				if(err)console.log(err);
			});
	}
	if(cat == "Concert"){
	var updateCats = { 
			businessName : name};

			Concert.findOneAndUpdate({'businessName' : businessName}, 
			{$set: updateCats},function(err,doc){
				if(err)console.log(err);
			});
	}
	if(cat == "EscapeRoom"){
	var updateCats = { 
			name : name};

			EscapeRoom.findOneAndUpdate({'name' : businessName}, 
			{$set: updateCats},function(err,doc){
				if(err)console.log(err);
			});
	}
	if(cat == "Theater"){
	var updateCats = { 
			name : name};

			Theater.findOneAndUpdate({'name' : businessName}, 
			{$set: updateCats},function(err,doc){
				if(err)console.log(err);
			});
	}
	if(cat == "Malahy"){
	var updateCats = { 
			businessName : name};

			Malahy.findOneAndUpdate({'businessName' : businessName}, 
			{$set: updateCats},function(err,doc){
				if(err)console.log(err);
			});
	}
	if(cat == "Trampoline"){
	var updateCats = { 
			businessName : name};

			Trampoline.findOneAndUpdate({'businessName' : businessName}, 
			{$set: updateCats},function(err,doc){
				if(err)console.log(err);
			});
	}
	if(cat == "Fight"){
	var updateCats = { 
			name : name};

			Fight.findOneAndUpdate({'name' : businessName}, 
			{$set: updateCats},function(err,doc){
				if(err)console.log(err);
			});
	}
	if(cat == "Kora"){
	var updateCats = { 
			businessName : name};

			Kora.findOneAndUpdate({'businessName' : businessName}, 
			{$set: updateCats},function(err,doc){
				if(err)console.log(err);
			});
	}
	if(cat == "Race"){
	var updateCats = { 
			businessName : name};

			Race.findOneAndUpdate({'businessName' : businessName}, 
			{$set: updateCats},function(err,doc){
				if(err)console.log(err);
			});
	}


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
    		else res.json('Added');
    		});

    		},


    updateContactInfoEmail : function(req, res){

    		var name = req.user.name;
    		
    		var email = req.body.email;
    		var oldEmail = req.body.oldEmail;

    		//req.checkBody('email', 'New Email is required').notEmpty();

    			Business.update({name:name,"contactInfo.email":oldEmail},{$set: {"contactInfo.email": email}}, function(err,doc){
    		if(err)console.log(err);
    		else res.json('Added');
    		});

    		},

    addContactInfoNum : function(req, res){
    	console.log('hna');
    		var name = req.user.name;
    		
    		var number = req.body.number;


    		//req.checkBody('number', 'New Number is required').notEmpty();

    		Business.update({'name':name},{$push:{"contactInfo.number":number}}, function(err,doc){
    		if(err)console.log(err);
    		else res.json('Added');
    		});

    		},

    addContactInfoEmail : function(req, res){

    		var name = req.user.name;
    		
    		var email = req.body.email;


    		

    		Business.update({name:name},{$push:{"contactInfo.email":email}}, function(err,doc){
    		if(err)console.log(err);
    		else res.json('Added');
    		});

    		},


viewOffers : function(req,res){

			offers.find({},function (err, docs) {

				if(err) res.json(err);
				else res.render('offers.ejs',{title:'Available offers',offer:docs});

			});
		},
   postOffers : function(req,res){

	
		
		var newOffer= new offers({
					businessName: req.body.businessName,
					  description: req.body.description,
				      category: req.body.category,
					 validTill: req.body.validtill });

				newOffer.save(function(err){
					if(err){ res.json({success:false, message:"This Form was not submitted"}); console.log(err);}
					else{res.json({success:true, message:"Your Offer is Now Posted"});}
});	
        
  

},
//Get all the bookings made in this service provider's business
getAllBookings:function(req, res){
      var x ;
      var a=[];
//checking conditions depending on the service provider's category
     if(req.user.category=='Cinema')
      {
        // If the category is cinema look in the cinema collections for the business name
        {Cinema.findOne({name:req.user.businessName},function(err, cinema){
            		
            if(err)
                res.send(err.message);
		else if (!cinema){
			// if the cinema is not found return an error message in a[0] 
		a[0]="No business";
        res.json(a);
	}
            else if (cinema.booked.length==0){
		    //if cinema is found but the booked array in cinema is empty return no bookings are made in a[0]
            a[0]="No bookings are made yet";
             res.json(a);
           }
		
            else{
		    /* if the booked array in cinema is not empty, put it in x and put x in a[0] and put the category of the service
		     provider in a[1] then return array a as a json object*/
		x=cinema.booked;
                a[0]=x;
                a[1]=req.user.category;
             res.json(a);
              }
        })
    }
}


else if (req.user.category=='Trampoline')
{Trampoline.findOne({businessName:req.user.businessName},function(err, trampoline){
   
    if(err)
                res.send(err.message);
		else if (!trampoline){
		a[0]="No business";
        res.json(a);
	}
            else if (trampoline.booked.length==0){
            a[0]="No bookings are made yet";
             res.json(a);
           }
		
            else{
		x=trampoline.booked;
                a[0]=x;
                a[1]=req.user.category;
             res.json(a);
              }
})
}
else if (req.user.category=='Kora')
{Kora.findOne({businessName:req.user.businessName},function(err, kora){

  
   if(err)
       res.send(err.message);
	
	else if (!kora){
		a[0]="No business";
        res.json(a);
	}
       else if (kora.booked.length==0){
       a[0]="No bookings are made yet";
        res.json(a);
      }
	
    else{
	 x=kora.booked;
         a[0]=x;
         a[1]=req.user.category;
      res.json(a);
      }
})
}

else if (req.user.category=='Fight')
{Fight.findOne({name:req.user.businessName},function(err, fight){

  
   if(err)
       res.send(err.message);
	
	else if (!fight){
		a[0]="No business";
        res.json(a);
	}
	
       else if (fight.booked.length==0){
       a[0]="No bookings are made yet";
        res.json(a);
      }
	
    else{
       x=fight.booked;
      a[0]=x;
      a[1]=req.user.category;
   res.json(a);
      }
})
}

else if (req.user.category=='Malahy')
{Malahy.findOne({businessName:req.user.businessName},function(err, malahy){

  
   if(err)
       res.send(err.message);
	else if (!malahy){
		a[0]="No business";
        res.json(a);
	}
       else if (malahy.bought.length==0){
       a[0]="No bookings are made yet";
        res.json(a);
      }
	
    else{
	 x=malahy.bought;
         a[0]=x;
         a[1]=req.user.category;
      res.json(a);
      }
})
}
else if (req.user.category=='Race')
{Race.findOne({businessName:req.user.businessName},function(err, race){

  
   if(err)
       res.send(err.message);
	else if (!race){
		a[0]="No business";
        res.json(a);
	}
       else if (race.booked.length==0){
       a[0]="No bookings are made yet";
        res.json(a);
      }
	
    else{
	  x=race.booked;
          a[0]=x;
          a[1]=req.user.category;
       res.json(a);
      }
})
}
else if (req.user.category=="EscapeRoom")
{EscapeRoom.findOne({name:req.user.businessName},function(err, escapeRoom){

  
   if(err)
       res.send(err.message);
	else if (!escapeRoom){
		a[0]="No business";
        res.json(a);
	}
       else if (escapeRoom.booked.length==0){
       a[0]="No bookings are made yet";
        res.json(a);
      }
	
    else{
	    x=escapeRoom.booked;
           a[0]=x;
           a[1]=req.user.category;
        res.json(a);
      }

})

}

else if (req.user.category=='Theater')
{Theatre.findOne({name:req.user.businessName},function(err, theatre){

  
   if(err)
       res.send(err.message);
	else if (!theatre){
		a[0]="No business";
        res.json(a);
	}
       else if (theatre.booked.length==0){
       a[0]="No bookings are made yet";
        res.json(a);
      }
	
    else{
	x=theatre.booked;
        a[0]=x;
        a[1]=req.user.category;
     res.json(a);
      }
})
}

else if (req.user.category=='Concert')
{Concert.findOne({businessName:req.user.businessName},function(err, concert){

  
   if(err)
       res.send(err.message);
	else if (!concert){
		a[0]="No business";
        res.json(a);
	}
       else if (concert.booked.length==0){
       a[0]="No bookings are made yet";
        res.json(a);
      }
	
    else{
        x=concert.booked;
        a[0]=x;
        a[1]=req.user.category;
     res.json(a);
      }
})
}


},

//THis is happening when serviceprovider presses the button addbusiness in service provider panel page
addBusiness: function(req, res){

//I am getting all data from the front end in order to add a business info	
	var emails = req.body.emails;
	emails = emails.split(/\r?\n/);
//The emails is an array that is seperated by \n in the front end
//So i am splitting that entry to be in an array of elements
	var number = req.body.numbers;
	number = number.split(/\r?\n/);
//The number is an array that is seperated by \n in the front end
//So i am splitting that entry to be in an array of elements
	
	var cat = req.body.category;
	console.log(cat);
//After entering all the data, I am Inserting those data in the businessTable
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
			console.log(err);
			res.json({success:false, message:"This Form was not submitted, You Either entered a notvalid data format or there is an existing business with the same Name"});
               	//If the business was not added i will send this message to the front end
		}else{
			res.json({success:true, message:"Your Form is submitted successfuly!, Now you can add details to your category"});
               		//If the business was added i will send this message to the front end
		}
            });
//THen finally i want to insert that business in it's specific category! So i amm checking the category and then enter the Business Name into that category table
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
	kora.save(function(err){if(err)console.log(err)});
	}
	if(cat == "Race"){
	var race = new Race();
	race.businessName = req.body.name;
	race.save();
	}


    },

//Here if we request to get all information in the serviceProvider table by the session we are in
getServiceP : function(req, res){

var service;
console.log(req.user);
if(req.user){
	 service = req.user.email;
//Here i am finding that email session in the service provider table and then returning the data retrieved
	ServiceProvider.findOne({'email':service},
			 function(err,doc){
				if(err)res.json(err);
				else
				res.json(doc);
			});
}


},

//gets the id of the review that willbe replied to and sets the reply of the review with the reply of the business provider
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
//views all reviews of business by it's name to be able to view and reply
	viewSreviews : function(req, res){


		if(req.user){
		var businessName = req.user.businessName;}
		else{
		var businessName = "BreakOut";
		}
		
		
		review.find({'businessName':businessName},
			 function(err,doc){
				if(err)res.json(err);
				else
				res.json(doc);
			});
		},



  viewBusinessPage: function(req,res)
  {
    console.log("I received a get request") 
	Business.find({},function(err,business)
			{ 
		res.json(business) ;

  })},

   


updateCinema : function(req, res){

        var name = req.user.businessName;
    	
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
    	                                else res.json("Added");
                                    });

    },
  
	updateConcerts: function(req, res){

   	var name = req.user.businessName;
    	
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
    	                                       else {res.json("Added")}
                                             });
    
    },

	updateEscapeRooms: function(req, res){

    	var name = req.user.businessName;
    	
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
    	                                   else {res.json("Added")}
                                        });
    
    },

	updateFight: function(req, res){

    	var name = req.user.businessName;
    	
    	var gameName = req.body.gameName;
    	var gameFieldTS = req.body.gameFieldTS;
    	var gamePrice = req.body.gamePrice;
    	var gameMinAge = req.body.gameMinAge;
    	var gameMinteam = req.body.gameMinteam;
    	var gameMaxTeam = req.body.gameMaxTeam;
    	var gameTS = req.body.gameTS;
    	var TS = gameFieldTS;
    	var TS1 = gameTS;
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
    	                               else {res.json("Added")}
                                    });
    
    },

	updateKora: function(req, res){
     
    	var name = req.user.businessName;
    	
    	var fieldName = req.body.fieldName;
    	var fieldAVSlots = req.body.fieldAVSlots;
    	var price = req.body.price;
      var TS = fieldAVSlots
      TS = TS.split(',');
      
    	Kora.update({businessName : name},{$push:{"fields":{
                                          name : fieldName,
                                     	    availableSlots : TS}},
                                     	   $set:{"price" : price}},function(err,doc){
    	                                     if(err){console.log(err)}
    	                                     else {res.json("Added")}
                                         });
    
    },

    updateMalahy: function(req, res){
      
    	var name = req.user.businessName;
    	
    	var ticketType = req.body.ticketType;
    	var ticketGamesTS = req.body.ticketGamesTS;
    	var ticketPrice = req.body.ticketPrice;
    	var malahyType = req.body.malahyType;
    	var TS = ticketGamesTS;
    	TS = TS.split(',') ;

   		Malahy.update({businessName : name},{$push:{"tickets":{
                                      			ticketType : ticketType,
                                      			games : TS,
                                      			price : ticketPrice}},
                                      		 $set:{"malahyType":malahyType}}, function(err,doc){
    	                                       if(err){console.log(err)}
    	                                       else {res.json("Added")}
                                            });
  
    },

	updateRace: function(req, res){

    	var name = req.user.businessName;
    	
    	var maxNumberOfCarts = req.body.maxNumberOfCarts;
    	var availableSlots = req.body.availableSlots;
    	var minNumberOfPeople = req.body.minNumberOfPeople;
    	var price = req.body.price;
      var TS = availableSlots;
      TS = TS.split(',');

      var newRace = {maxNumberOfCarts : maxNumberOfCarts,
                     price : price,
                     minNumberOfPeople : minNumberOfPeople};

    	Race.update({businessName : name},{$set : newRace,
                                     	   $push:{"availableSlots" : TS}}, function(err,doc){
    	                                     if(err){console.log(err)}
    	                                     else {res.json("Added");}
                                        });
    
    },

    updateTheatre: function(req, res){

   	var name = req.user.businessName;
    	var hallName = req.body.hallName;
    	var hallSeatsTS = req.body.hallSeatsTS;
    	var hallShows = req.body.hallShows;
    	var hallTSTS = req.body.hallTSTS;
    	console.log(hallName);
    	
	var price = req.body.Price;
    	var TS = hallSeatsTS;
    	var TS1 = hallTSTS;
    	TS = TS.split(',');
    	TS1 = TS1.split(',');
     
    	Theatre.update({name : name},{$set:{"price" : price},
                                    $push:{"hall" :{
                                		name : hallName,
                                		shows : hallShows,
                                		seats : TS,
                                		timeSlots : TS1}}}, function(err,doc){
    	                               if(err){console.log(err)}
    	                               else {console.log("d5aal");res.json("Added");}
                                    });
    
    },

	updateTrampoline: function(req, res){

    	var name = req.user.businessName;
    
    	var timeSlots = req.body.timeSlots;
    	var price = req.body.price; 

    	Trampoline.update({businessName:name},{$push:{"timeSlots":timeSlots},
                                           	   $set:{"price":price}}, function(err,doc){
    	                                           if(err)console.log(err);
    	                                           else res.json("Added");
                                                });
    
    }



}

module.exports = serviceProviderController;
