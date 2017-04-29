var Business=require('../models/Business');
var user = require('../models/User');
var fight = require('../models/Fight');
var cinema = require('../models/Cinema');
var concert = require('../models/Concert');
var escapeRoom = require('../models/EscapeRoom');
var kora = require('../models/Kora');
var malahy = require('../models/Malahy');
var race = require('../models/Race');
var theatre = require('../models/Theatre');
var trampoline = require('../models/Trampoline');
var bookingHistory = require('../models/BookingHistory');
var Offers = require('../models/Offers');
var Rating = require('../models/Rating') ;
var Maintenance = require('../models/Maintenance') ;
var Review = require('../models/Reviews') ;
var ServiceProvider = require('../models/ServiceProvider') ;



var userController={

  search: function(req, res){

    var businessName=req.body.searchBox;

    Business.findOne({'name':businessName}, function(err, business){
      if (err)
        return res.send(err.message);
      if(!business)
        return res.send('No business found');
        console.log(business);
      return res.render("se.ejs",{business});
    })


  },
//Here If the user wants to wirte review on a specific category
  postReviews: function(req,res){
//Iam adding a new review in the reviews table with the request attributes coming from the front end
    var newReview = new Review({
                nameOfUser : req.user.name,
                title: req.body.titles ,
                body :req.body.descriptions,
                category:req.body.category,
                businessName:req.body.bus

    });
	res.json("sucess");


    newReview.save();

  },

deleteFromBus : function(req, res1){
		
		var userEmail = req.user.email;


		var category = req.body.buscat;
		var id =req.body._id;
		var busname = req.body.busname;
		var catid = req.body.catid;

		if(category === "fight"){
			var booking = fight.booked.findOne({'_id': catid});
			var bus = business.findOne({'name':busname});
			fight.booked.findOneAndRemove({'_id': catid},function(err,res){
				if(err){
					console.log(err)
				}
			});

			var penalty = (bus.cancelingPenalty + user.balance);
			if(booking.date > (bus.deadlinetoCancel + Date.now())){
			user.findOneAndUpdate({'userEmail':userEmail},{'balance':penalty},function(err,res){
				if(err){
					console.log(err)
				}
			});
			}
		};

		
		if(category === "cinema"){
			var booking = cinema.booked.findOne({'_id': catid});
			var bus = business.findOne({'name':busname});
			cinema.booked.findOneAndRemove({'_id': catid},function(err,res){
				if(err){
					console.log(err)
				}
			});

			var penalty = (bus.cancelingPenalty + user.balance);
			if(booking.date > (bus.deadlinetoCancel + Date.now())){
			user.findOneAndUpdate({'userEmail':userEmail},{'balance':penalty},function(err,res){
				if(err){
					console.log(err)
				}
			});
			}
		};

		
		if(category === "concert"){
			var booking = concert.booked.findOne({'_id': catid});
			var bus = business.findOne({'name':busname});
			concert.booked.findOneAndRemove({'_id': catid},function(err,res){
				if(err){
					console.log(err)
				}
			});

			var penalty = (bus.cancelingPenalty + user.balance);
			if(booking.date > (bus.deadlinetoCancel + Date.now())){
			user.findOneAndUpdate({'userEmail':userEmail},{'balance':penalty},function(err,res){
				if(err){
					console.log(err)
				}
			});
			}
		};


		if(category === "escapeRoom"){
			var booking = escapeRoom.booked.findOne({'_id': catid});
			var bus = business.findOne({'name':busname});
			escapeRoom.booked.findOneAndRemove({'_id': catid},function(err,res){
				if(err){
					console.log(err)
				}
			});

			var penalty = (bus.cancelingPenalty + user.balance);
			if(booking.date > (bus.deadlinetoCancel + dDate.now())){
			user.findOneAndUpdate({'userEmail':userEmail},{'balance':penalty},function(err,res){
				if(err){
					console.log(err)
				}
			});
			}
		};


		if(category === "kora"){
			var booking = kora.booked.findOne({'_id': catid});
			var bus = business.findOne({'name':busname});
			kora.booked.findOneAndRemove({'_id': catid},function(err,res){
				if(err){
					console.log(err)
				}
			});

			var penalty = (bus.cancelingPenalty + user.balance);
			if(booking.date > (bus.deadlinetoCancel + Date.now())){
			user.findOneAndUpdate({'userEmail':userEmail},{'balance':penalty},function(err,res){
				if(err){
					console.log(err)
				}
			});
			}
		};


		if(category === "malahy"){
			var booking = malahy.bought.findOne({'_id': catid});
			var bus = business.findOne({'name':busname});
			malahy.bought.findOneAndRemove({'_id': catid},function(err,res){
				if(err){
					console.log(err)
				}
			});

			var penalty = (bus.cancelingPenalty + user.balance);
			if(booking.date > (bus.deadlinetoCancel + Date.now())){
			user.findOneAndUpdate({'userEmail':userEmail},{'balance':penalty},function(err,res){
				if(err){
					console.log(err)
				}
			});
			}
		};


		if(category === "race"){
			var booking = race.booked.findOne({'_id': catid});
			var bus = business.findOne({'name':busname});
			race.booked.findOneAndRemove({'_id': catid},function(err,res){
				if(err){
					console.log(err)
				}
			});

			var penalty = (bus.cancelingPenalty + user.balance);
			if(booking.date > (bus.deadlinetoCancel + Date.now())){
			user.findOneAndUpdate({'userEmail':userEmail},{'balance':penalty},function(err,res){
				if(err){
					console.log(err)
				}
			});
			}
		};


		if(category === "theatre"){
			var booking = theatre.booked.findOne({'_id': catid});
			var bus = business.findOne({'name':busname});
			theatre.booked.findOneAndRemove({'_id': catid},function(err,res){
				if(err){
					console.log(err)
				}
			});

			var penalty = (bus.cancelingPenalty + user.balance);
			if(booking.date > (bus.deadlinetoCancel + Date.now())){
			user.findOneAndUpdate({'userEmail':userEmail},{'balance':penalty},function(err,res){
				if(err){
					console.log(err)
				}
			});
			}
		};


		if(category === "trampoline"){
			var booking = trampoline.booked.findOne({'_id': catid});
			var bus = business.findOne({'name':busname});
			trampoline.booked.findOneAndRemove({'_id': catid},function(err,res){
				if(err){
					console.log(err)
				}
			});

			var penalty = (bus.cancelingPenalty + user.balance);
			if(booking.date > (bus.deadlinetoCancel + Date.now())){
			user.findOneAndUpdate({'userEmail':userEmail},{'balance':penalty},function(err,res){
				if(err){
					console.log(err)
				}
			});
			}
		};

		
		bookingHistory.findOneAndUpdate({'_id': id},{'status':'Canceled'},function(err,res){
				if(err){
					console.log(err)
				}
				else{
					res1.json("success");					
				}
			});
		
	},





  filterByLocation: function(req,res){

    var location= req.body.location;

    Business.find({'location':location}, function(err,business){
      if (err)
        return (err);
      if (!business)
          return res.send('No business found');
      return res.send(business);
    })
  },

  filterByAge: function(req,res){
    var age=req.body.age;

    Business.find({'ageRequirement':age}, function(err, business){
      if (err)
        return (err.message);
      if(!business)
          return res.send('No business found');
      return res.send(business);
    })
  },

 
	updateUser : function(req, res){
		var email;
		if(req.user){
		 email = req.user.email;}
		else{
		email = "test@test";
		}
		var name = req.body.name;
		var password = req.body.password;
		var birthdate = req.body.birthdate;
		var gender = req.body.gender;
		var homelocation = req.body.homelocation;
		var contact = req.body.contact;
		var cardNumber = req.body.cardNumber;
		var holderName = req.body.holderName;
		var cvv = req.body.cvv;
		var validdate = req.body.validdate;

	/*  req.checkBody('name', 'Name is required').notEmpty();
		req.checkBody('password', 'Password is required').notEmpty();
		req.checkBody('birthdate', 'Birthdate is required').notEmpty(); */

		var userupdate = {name : name,
			 password : password,
		 gender : gender,
		 homelocation : homelocation,
		 contact : contact};
		user.findOneAndUpdate({'email' : email}, 
			{$set: userupdate},function(err,doc){
				if(err)console.log(err);
			});
		
		},

		viewMyprofile: function(req,res){
					var email;
		if(req.user){
		 email = req.user.email;}
		else{
		email = "test@test";
		}
		users.findOne({'email' : email},function(err,doc){
				if(err)console.log(err);
				else res.json(doc);
			});


		},


viewCategories : function(req,res){
	var category = categories();
			categories.find(function (err, docs) {


				if(err) res.json(err);
				else res.render('categories.ejs',{title:'Available categories',category:docs});

			});
		},
    viewCinemas : function(req,res){

    			cinema.find({},function (err, docs) {

    				if(err) res.json(err);
    				else res.json(docs);

    			});
    		},
    viewConcerts : function(req,res){

    			concert.find({},function (err, docs) {

    				if(err) res.json(err);
    				else res.json(docs);

    			});
    		},
    viewEscapeRooms : function(req,res){

    			escapeRoom.find({},function (err, docs) {

    				if(err) res.json(err);
    				else res.json(docs);

    			});
    		},
    viewFights : function(req,res){

    			fight.find({},function (err, docs) {

    				if(err) res.json(err);
    					else res.json(docs);

    			});
    		},
    viewKora : function(req,res){

    			kora.find({},function (err, docs) {

    				if(err) res.json(err);
    				else res.json(docs);

    			});
    		},
    viewMalahy : function(req,res){

    			malahy.find({},function (err, docs) {

    				if(err) res.json(err);
    				else res.json(docs);

    			});
    		},
    viewRaces : function(req,res){

    			race.find({},function (err, docs) {

    				if(err) res.json(err);
    				else res.json(docs);

    			});
    		},
    viewTrampolines : function(req,res){

    			trampoline.find({},function (err, docs) {

    				if(err) res.json(err);
    				else res.json(docs);

    			});
    		},
    viewTheatres : function(req,res){

    			theatre.find({},function (err, docs) {

    				if(err) res.json(err);
    				else res.json(docs);

    			});
    		},

 viewBusinessPage: function(req,res)
  {
	Business.find({},function(err,docs)
			{
				res.render('business.ejs',{docs:docs});
			});
  },

getAllOffers:function(req, res){
   var x;
        Offers.find({}).exec(function(err, offers){

           if(err)
               res.send(err.message);
               else if (offers.length===0){
               x="No offers";
                res.json(x);
              }
            else{

             res.json(offers);
              }

        })
    },

countUsers : function(req,res){
  
 user.count({},function(err,users){
if(err)
res.send(err);

else

res.json(users) ;



 });

},



rate_place: function(req, res) {
  var new_Rating= new Rating();
   new_Rating.place =req.body.name; 
   new_Rating.rate =req.body.rate;
     new_Rating.email=req.user.email; 
  console.log( req.user.email) ; 
  new_Rating.save(function(err, task) {
    if (err){
    console.log(err);
     res.send("No rating done");}
     //res.json(err) ; 
     else 
console.log(task) ;
    res.send(task);
  });
},

view2: function(req,res){



var arr =[] ;
var x=0 ;
var sum=0;

Rating.find({place:req.body.name},function(err,task){

var a =task.length ;
var i=0;
var i =0 ;
while(a>0){
arr[i]=task[i].rate ;
a--;
i++
}

while(x<task.length){
	sum=sum+arr[x] ; 
x++;
}

var ratesss=sum/task.length ; 
 
Business.findOneAndUpdate({name:req.body.name},{$set:{rate:ratesss}},{new: true}, function(err, task1){

res.json(task1) ; 
console.log(task1);
})

}).select({rate:'req.body.rate'}); 

},




postBooking: function(req, res){
        var booking = new bookingHistory();
        booking.userEmail = req.body.userEmail;
        booking.description = req.body.description;
        booking.status = req.body.status;
        booking.save(function(err){
             if (err) {
                 res.send("Cannot create");
                }else{
                    res.send("Created Successfuly");
                }
            });
    },
	
//This is called when a User Press view my bookings button in user profile
viewBooking:  function(req, res){
//I am getting the email of the user by the session
	if(req.user){
		 email = req.user.email;}
		else{
		email = "reem@gmail.com";
		}
//I am getting all bookinghistory data of that user email and then sending this data to the front end in order to display it
        bookingHistory.find({userEmail: email}, function(err, docs){ 
            if(err) res.json(err);
            else res.json(docs);
        });

    },

viewMyprofile: function(req,res){
					var email;
		if(req.user){
		 email = req.user.email;}
		else{
		email = "test@test";
		}
		user.findOne({'email' : email},function(err,doc){
				if(err)console.log(err);
				else res.json(doc);
			});


		},


viewSearchDirect:  function(req, res){
        Business.find({}, function(err, docs){
            if(err) res.json(err);
            else res.render('../views/searchdirect', {buisnesses: docs});
        });

    },
   newBooking:function(req, res){
       var email;
       console.log(req.body.Cat);
       var serviceProvider;
       var u = new ServiceProvider({
           category :req.body.Cat}
       )
        if(req.user){
              email = req.user.email;
               serviceProvider = u;
        }
        else{
            email = "test@test";
            serviceProvider = u;
            
        }
        var busname = null;
        var catid = null;
        var buscat = null;
        var description = null;
        var status = "In Progress";
        var flag = 0;
        var bookedTimeSlot = req.body.bookedTimeSlot;
         var date = Date.now();
         var paymentMethod = "Cash";
         if (serviceProvider.category ==='Cinema'){
          var bookedScreen = req.body.bookedScreen;
          var bookedMovie = req.body.bookedMovie;
          var bookedSeats = req.body.bookedSeats;
          var cinemaName= req.body.name;
          var bookingObj = {userEmail:email ,bookedTimeSlot:bookedTimeSlot, paymentMethod:paymentMethod, date:date,bookedScreen : bookedScreen,bookedMovie:bookedMovie,bookedSeats:bookedSeats};     
           
           cinema.findOneAndUpdate({'name':cinemaName}, {$push: {'booked': bookingObj}},{new:true},function(err, doc){
		    if(err) console.log(err);   
         
            flag=1;
            catid = doc.booked[doc.booked.length-1]._id;
             busname = cinemaName;
			 description = "This is a booking for :"  +" "+ serviceProvider.category +" "+ cinemaName +", ON "+ bookedTimeSlot +" "+ date +", via : "+ paymentMethod +", Screen : "+ bookedScreen +", Movie: "+ bookedMovie +", Seats: "+bookedSeats;
         
			 var newBookingHistory = new bookingHistory({
                        userEmail : email,
                        description: description ,
                        status :status,
                       buscat : serviceProvider.category,
                       busname: busname,
                       catid :catid
            });
           
            newBookingHistory.save();
          console.log("success"); 
		  res.json("Enta kda gamed");
         });
         }   
        if (serviceProvider.category ==='Concert'){
        var bookedEventName = req.body.bookedEventName;
        var eventName= req.body.eventName;
         var businessName= req.body.businessName;
        var bookingObj = {userEmail:email ,bookedTimeSlot:bookedTimeSlot, paymentMethod:paymentMethod, date:date,bookedEventName:bookedEventName};     
          
           concert.findOneAndUpdate({'businessName':businessName,'eventName':eventName}, {$push: {'booked': bookingObj}},{new:true},function(err, doc){
		    if(err) console.log(err);  
            flag = 1;
            catid = doc.booked[doc.booked.length-1]._id;
             busname = businessName; 
			 description = "This is a booking for :"  +" "+ serviceProvider.category +" "+ eventName + " "+ businessName +", ON "+ bookedTimeSlot +" "+ date +", via "+ paymentMethod + ", Event: " + bookedEventName;  
       
			 var newBookingHistory = new bookingHistory({
                        userEmail : email,
                        description: description ,
                        status :status,
                       buscat : serviceProvider.category,
                       busname: busname,
                       catid :catid
            });
           
            newBookingHistory.save();
          console.log("success"); 
		  res.json("Enta kda gamed");   
         });
           }
        if (serviceProvider.category ==='Escape Room'){
          var bookedRoom = req.body.bookedRoom;
          var name= req.body.businessName;
          var bookingObj = {userEmail:email ,bookedTimeSlot:bookedTimeSlot, paymentMethod:paymentMethod, date:date,bookedRoom:bookedRoom};           
           console.log(name);
           escapeRoom.findOneAndUpdate({'name':name}, {$push: {'booked': bookingObj}},{new:true},function(err, doc){
		    if(err) console.log(err); 
            flag = 1;  
            console.log(doc);
            catid = doc.booked[doc.booked.length-1]._id;
             busname = name;   
			 description = "This is a booking for :" +" "+ serviceProvider.category +" "+ name +", ON "+ bookedTimeSlot +" "+ date +", via "+ paymentMethod + ", Room: " + bookedRoom;
       

			 var newBookingHistory = new bookingHistory({
                        userEmail : email,
                        description: description ,
                        status :status,
                       buscat : serviceProvider.category,
                       busname: busname,
                       catid :catid
            });
           
            newBookingHistory.save();
			 console.log("success"); 
		  res.json("Enta kda gamed"); 
         });
          }
        if (serviceProvider.category ==='Malahy'){
         var numberOfTickets = req.body.numberOfTickets;
            var businessName = req.body.businessName;
			var BookedticketType = req.body.BookedticketType;
            var bookingObj = {userEmail:email ,numberOfTickets:numberOfTickets,BookedticketType:BookedticketType};     
          
           malahy.findOneAndUpdate({'businessName':businessName}, {$push: {'bought': bookingObj}},{new:true},function(err, doc){
		    if(err) console.log(err);  
            flag = 1; 
              busname = businessName;
			   description = "This is a booking for :" +" "+ serviceProvider.category +" "+  businessName +", with a number of tickets = " + numberOfTickets;   
       
			  var newBookingHistory = new bookingHistory({
                        userEmail : email,
                        description: description ,
                        status :status,
                       buscat : serviceProvider.category,
                       busname: busname,
                       catid :catid
            });
           
            newBookingHistory.save();  
			 console.log("success"); 
		  res.json("Enta kda gamed");  
         });
         }
        if (serviceProvider.category ==='Trampoline'){
       var businessName= req.body.businessName;
	   console.log(businessName +"yarabb");
    var bookingObj = {userEmail:email ,bookedTimeSlot:bookedTimeSlot, paymentMethod:paymentMethod, date:date,businessName:businessName};              
           trampoline.findOneAndUpdate({'businessName':businessName}, {$push: {'booked': bookingObj}},{new:true},function(err, doc){
		    if(err) console.log(err);  
            flag = 1;  
            catid = doc.booked[doc.booked.length-1]._id;
             busname = businessName; 

			 description = "This is a booking for :" +" "+ serviceProvider.category +" "+  businessName +", ON "+ bookedTimeSlot +" "+ date +", via "+ paymentMethod ;
      

			  var newBookingHistory = new bookingHistory({
                        userEmail : email,
                        description: description ,
                        status :status,
                       buscat : serviceProvider.category,
                       busname: busname,
                       catid :catid
            });
           
            newBookingHistory.save();
          console.log("success"); 
		  res.json("Enta kda gamed");
         });
           }
        if (serviceProvider.category ==='Fight'){
        var bookedGame = req.body.bookedGame;
          var bookedField = req.body.bookedField;
          var name= req.body.name;
          var bookingObj = {userEmail:email ,bookedTimeSlot:bookedTimeSlot, paymentMethod:paymentMethod, date:date,bookedGame : bookedGame,bookedField:bookedField};           
           fight.findOneAndUpdate({'name':name}, {$push: {'booked': bookingObj}},{new:true},function(err, doc){
		    if(err) console.log(err); 
            flag = 1; 
            catid = doc.booked[doc.booked.length-1]._id;
             busname = name;  
			 description = "This is a booking for :" +" "+ serviceProvider.category +" "+ name +", ON "+ bookedTimeSlot +" "+ date +", via "+ paymentMethod + ", Game: " + bookedGame +", BookedField: "+ bookedField; 
			 var newBookingHistory = new bookingHistory({
                        userEmail : email,
                        description: description ,
                        status :status,
                       buscat : serviceProvider.category,
                       busname: busname,
                       catid :catid
            });
           
            newBookingHistory.save();
          console.log("success"); 
		  res.json("Enta kda gamed");  
         });}
         if (serviceProvider.category ==='Kora'){
        var bookedField = req.body.bookedField;
		
      var businessName= req.body.businessName;
         var bookingObj = {userEmail:email ,bookedTimeSlot:bookedTimeSlot, paymentMethod:paymentMethod, date:date,bookedField:bookedField};        
           kora.findOneAndUpdate({'businessName':businessName}, {$push: {'booked': bookingObj}},{new:true},function(err, doc){
		    if(err) console.log(err);   
            flag = 1;   
            catid = doc.booked[doc.booked.length-1]._id;
             busname = businessName;
			 description = "This is a booking for :" +" "+ serviceProvider.category +" "+ businessName +", ON "+ bookedTimeSlot +" "+ date +", via "+ paymentMethod +", BookedField: "+ bookedField;
			 var newBookingHistory = new bookingHistory({
                        userEmail : email,
                        description: description ,
                        status :status,
                       buscat : serviceProvider.category,
                       busname: busname,
                       catid :catid
            });
           
            newBookingHistory.save();
          console.log("success"); 
		  res.json("Enta kda gamed");  
         });}
        if (serviceProvider.category ==='Race'){
        var numberOfPeople = req.body.numberOfPeople;
          var businessName= req.body.businessName;
    var bookingObj = {userEmail:email ,bookedTimeSlot:bookedTimeSlot, paymentMethod:paymentMethod, date:date,bookedScreen : bookedScreen,numberOfPeople:numberOfPeople};     
          
           race.findOneAndUpdate({'businessName':businessName}, {$push: {'booked': bookingObj}},{new:true},function(err, doc){
		    if(err) console.log(err);
            flag = 1;      
            catid = doc.booked[doc.booked.length-1]._id;
             busname = businessName;
			 description = "This is a booking for :" +" "+ serviceProvider.category +" "+ businessName +", ON "+ bookedTimeSlot +" "+ date +", via "+ paymentMethod  +", NumberOfPeople: "+ numberOfPeople;
     
			  var newBookingHistory = new bookingHistory({
                        userEmail : email,
                        description: description ,
                        status :status,
                       buscat : serviceProvider.category,
                       busname: busname,
                       catid :catid
            });
           
            newBookingHistory.save();
          console.log("success"); 
		  res.json("Enta kda gamed");  
         });
          }
        if (serviceProvider.category ==='Theatre'){
        var bookedHall = req.body.bookedHall;
          var bookedShow = req.body.bookedShow;
          var bookedSeats = req.body.bookedSeats;
          var name= req.body.theatreName;
         var bookingObj = {userEmail:email ,bookedTimeSlot:bookedTimeSlot, paymentMethod:paymentMethod, date:date,bookedHall : bookedHall,bookedShow:bookedShow,bookedSeats:bookedSeats};     
          
           theatre.findOneAndUpdate({'name':name}, {$push: {'booked': bookingObj}},{new:true},function(err, doc){
		    if(err) console.log(err);     
            flag = 1; 
            catid = doc.booked[doc.booked.length-1]._id;
             busname = name;
			  description = "This is a booking for :" +" "+ serviceProvider.category +" "+ name +", ON "+ bookedTimeSlot +" "+ date +", via "+ paymentMethod  +", Hall: "+ bookedHall+", Show: "+ bookedShow+", Seats: "+ bookedSeats;
			  var newBookingHistory = new bookingHistory({
                        userEmail : email,
                        description: description ,
                        status :status,
                       buscat : serviceProvider.category,
                       busname: busname,
                       catid :catid
            });
           
            newBookingHistory.save();
          console.log("success"); 
		  res.json("Enta kda gamed");
         });
       }
    },
viewMalahyp: function(req,res)
  {
  	var array = [];
	  console.log(req.params.bus_name);
  	//var businessName = req.body.businessName || req.query.businessName;
  	var bn = req.params.bus_name;
	Business.findOne({'name':bn},function(err,docs)
			{ 
				array[0] = docs;
			
			
				
			});
	malahy.findOne({'businessName':bn},function(err,docs)
		{
			array[1] = docs;
			
		}).then(function(){console.log(array); res.json(array);});

	  
  },
  viewConcertp: function(req,res)
  {
  	var array = [];
	  console.log(req.params.bus_name);
  	//var businessName = req.body.businessName || req.query.businessName;
  	var bn = req.params.bus_name;
	Business.findOne({'name':bn},function(err,docs)
			{ 
				array[0] = docs;
			
			
				
			});
	concert.findOne({'businessName':bn},function(err,docs)
		{
			array[1] = docs;
			
		}).then(function(){console.log(array); res.json(array);});

	  
  },
   viewRacep: function(req,res)
  {
  	var array = [];
	  console.log(req.params.bus_name);
  	//var businessName = req.body.businessName || req.query.businessName;
  	var bn = req.params.bus_name;
	Business.findOne({'name':bn},function(err,docs)
			{ 
				array[0] = docs;
			
			
				
			});
	race.findOne({'businessName':bn},function(err,docs)
		{
			array[1] = docs;
			
		}).then(function(){console.log(array); res.json(array);});

	  
  },
  viewTrampolinep: function(req,res)
  {
	var array = [];
	console.log(req.params.bus_name);
  	//var businessName = req.body.businessName || req.query.businessName;
  	var bn = req.params.bus_name;
	Business.findOne({'name':bn},function(err,docs)
			{ 
				array[0] = docs;
			
			
				
			});
	trampoline.findOne({'businessName':bn},function(err,docs)
		{
			array[1] = docs;
			
		}).then(function(){console.log(array); res.json(array);});

	  
  },
  viewCinemap: function(req,res)
  {
  	var array = [];
	  console.log(req.params.bus_name);
  	//var businessName = req.body.name || req.query.name;
  var bn = req.params.bus_name;
	Business.findOne({'name':bn},function(err,docs)
			{ 
				array[0] = docs;
			
			
				
			});
	cinema.findOne({'name':bn},function(err,docs)
		{
			array[1] = docs;
			
		}).then(function(){console.log(array); res.json(array);});

	  
  },
  viewEscapep: function(req,res)
  {
  	var array = [];
	  console.log(req.params.bus_name);
  	//var businessName = req.body.name || req.query.name;
  	var bn = req.params.bus_name;
	Business.findOne({'name':bn},function(err,docs)
			{ 
				array[0] = docs;
			
	
			});
	escapeRoom.findOne({'name':bn},function(err,docs)
		{
			array[1] = docs;
			
		}).then(function(){console.log(array); res.json(array);});

	  
  },
   viewFightp: function(req,res)
  {
  	var array = [];
  	//var businessName = req.body.name || req.query.name;
  	console.log(req.params.bus_name);
	  var bn = req.params.bus_name;
	Business.findOne({'name':bn},function(err,docs)
			{ 
				array[0] = docs;
			
			
				
			});
	fight.findOne({'name':bn},function(err,docs)
		{
			array[1] = docs;
			
		}).then(function(){console.log(array); res.json(array);});

	  
  },
   viewKorap: function(req,res)
  {
  var array = [];
  	//var businessName = req.body.businessName || req.query.businessName;
  	console.log(req.params.bus_name);
	  var bn = req.params.bus_name;
	Business.findOne({'name':bn},function(err,docs)
			{ 
				array[0] = docs;
			
			
				
			});
	kora.findOne({'businessName':bn},function(err,docs)
		{
			array[1] = docs;
			
		}).then(function(){console.log(array); res.json(array);});

	  
  },
    viewTheatrep: function(req,res)
  {
  	var array = [];
	console.log(req.params.bus_name);
  	//var businessName = req.body.name || req.query.name;
  	var bn = req.params.bus_name;
	Business.findOne({'name':bn},function(err,docs)
			{ 
				array[0] = docs;
			
			
				
			});
	theatre.findOne({'name':bn},function(err,docs)
		{


			array[1] = docs;
			
		}).then(function(){console.log(array); res.json(array);});

	  
  }





}






module.exports = userController;
