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

  postReviews: function(req,res){
    var newReview = new Reviews({
                nameOfUser : req.user.name,
                title: req.body.title ,
                body :req.body.body,
                category:req.body.category,
                businessName:req.body.businessName

    });


    newReview.save();

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
deleteFromBus : function(req, res){

		var category = req.body.category;
		var user = req.body.email;
		var date = req.body.date;
		var penalty = req.body.cancelingPenalty;
		var deadline = req.body.deadlinetoCancel;
		var id = req.body._id;

		if(category === "fight"){
			var time = req.body.bookedTimeSlot;
			var x = fight.find({'_id':id});

			x.booked.remove(({'userEmail':email},{'bookedTimeSlot': time},{'date':date}),function(err,res){
				if(err){
					console.log(err)
				}
			});
			var price = req.body.game.price;

			if(deadline > date.now()){
			user.balance = (penalty*price);
			}

		};


		if(category === "cinema"){
			var time = req.body.bookedTimeSlot;
			var x = cinema.find({'_id':id});
			x.booked.remove(({'userEmail':email},{'bookedTimeSlot': time},{'date':date}),function(err,res){
				if(err){
					console.log(err)
				}
			})
			var price = req.body.price;

			if(deadline > date.now()){
			user.balance = (penalty*price);
			}
		};


		if(category === "concert"){
			var time = req.body.bookedTimeSlot;
			var x = concert.find({'_id':id});
			x.booked.remove(({'userEmail':email},{'bookedTimeSlot': time},{'date':date}),function(err,res){
				if(err){
					console.log(err)
				}
			})
			var price = req.body.price;

			if(deadline > date.now()){
			user.balance = (penalty*price);
			}
		};


		if(category === "escapeRoom"){
			var time = req.body.bookedTimeSlot;
			var x = escapeRoom.find({'_id':id});
			x.booked.remove(({'userEmail':email},{'bookedTimeSlot': time},{'date':date}),function(err,res){
				if(err){
					console.log(err)
				}
			})
			var price = req.body.room.price;

			if(deadline > date.now()){
			user.balance = (penalty*price);
			}
		};


		if(category === "kora"){
			var time = req.body.bookedTimeSlot;
			var x = kora.find({'_id':id});
			kora.booked.remove(({'userEmail':email},{'bookedTimeSlot': time},{'date':date}),function(err,res){
				if(err){
					console.log(err)
				}
			})
			var price = req.body.price;

			if(deadline > date.now()){
			user.balance = (penalty*price);
			}
		};


		if(category === "malahy"){
			var x = malahy.find({'_id':id});
			x.booked.remove(({'userEmail':email},{'date': date}),function(err,res){
				if(err){
					console.log(err)
				}
			})
			var price = req.body.tickets.price;

			if(deadline > date.now()){
			user.balance = (penalty*price);
			}
		};


		if(category === "race"){
			var time = req.body.bookedTimeSlot;
			var x = race.find({'_id':id});
			x.booked.remove(({'userEmail':email},{'bookedTimeSlot': time},{'date':date}),function(err,res){
				if(err){
					console.log(err)
				}
			})
			var price = req.body.price;

			if(deadline > date.now()){
			user.balance = (penalty*price);
			}
		};


		if(category === "theatre"){
			var time = req.body.bookedTimeSlot;
			var x = theatre.find({'_id':id});
			x.booked.remove(({'userEmail':email},{'bookedTimeSlot': time},{'date':date}),function(err,res){
				if(err){
					console.log(err)
				}
			})
			var price = req.body.price;

			if(deadline > date.now()){
			user.balance = (penalty*price);
			}
		};


		if(category === "trampoline"){
			var time = req.body.bookedTimeSlot;
			var x = trampoline.find({'_id':id});
			x.booked.remove(({'userEmail':email},{'bookedTimeSlot': time},{'date':date}),function(err,res){
				if(err){
					console.log(err)
				}
			})
			var price = req.body.price;

			if(deadline > date.now()){
			user.balance = (penalty*price);
			}
		};

		var mail=req.body.email;
		var id =req.body._id;
		bookingHistory.update(({'_id': id},{'userEmail':mail}),{'status':'Canceled'},function(err,res){
				if(err){
					console.log(err)
				}
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

 newBooking:function(req, res){
        var email = req.user.email;
        var description = null;
        var status = req.body.status;
        var flag = 0;
        //common
        var bookedTimeSlot = req.body.bookedTimeSlot;
         var date = req.body.date;
         var paymentMethod = req.body.paymentMethod;

        var serviceProvider= req.user;
         if (serviceProvider.category ==='Cinema'){
          var bookedScreen = req.body.bookedScreen;
          var bookedMovie = req.body.bookedMovie;
          var bookedSeats = req.body.bookedSeats;
          var cinemaName= req.body.name;
        var errors = req.validationErrors();

        if(errors){
            res.render('/',{ //virtual page
                errors:errors
            });
        } else {
           var bookingObj = {userEmail:email ,bookedTimeSlot:bookedTimeSlot, paymentMethod:paymentMethod, date:date,bookedScreen : bookedScreen,bookedMovie:bookedMovie,bookedSeats:bookedSeats};

           cinema.findOneAndUpdate({'name':cinemaName}, {$push: {'booked': bookingObj}},function(err, doc){
		    if(err) console.log(err);
            flag=1;
         });
         description = "This is a booking for :"  +" "+ ServiceProvider.category +" "+ cinemaName +" on "+ bookedTimeSlot +" "+ date +" via "+ paymentMethod +" screen no "+ bookedScreen +" movie "+ bookedMovie +" Seats: "+bookedSeats;

            req.flash('success_msg', 'Your booking has been made successfully. Please verify the booking by your chosen way of communication');

            res.redirect('/index');
        }
        }
        if (serviceProvider.category ==='Concert'){
        var bookedEventName = req.body.bookedEventName;
        var eventName= req.body.eventName;
         var businessName= req.body.businessName;

        var errors = req.validationErrors();

        if(errors){
            res.render('/',{ //virtual page
                errors:errors
            });
        } else {
          var bookingObj = {userEmail:email ,bookedTimeSlot:bookedTimeSlot, paymentMethod:paymentMethod, date:date,bookedEventName:bookedEventName};

           concert.findOneAndUpdate({'businessName':businessName,'eventName':eventName}, {$push: {'booked': bookingObj}},function(err, doc){
		    if(err) console.log(err);
            flag = 1;
         });
          description = "This is a booking for :"  +" "+ ServiceProvider.category +" "+ eventName + " "+ businessName +" on "+ bookedTimeSlot +" "+ date +" via "+ paymentMethod + " Event: " + bookedEventName;

            req.flash('success_msg', 'Your booking has been made successfully. Please verify the booking by your chosen way of communication');

            res.redirect('/index');
        }
        }
        if (serviceProvider.category ==='Escape Room'){
          var bookedRoom = req.body.bookedRoom;
          var name= req.body.roomname;

        var errors = req.validationErrors();

        if(errors){
            res.render('/',{ //virtual page
                errors:errors
            });
        } else {
           var bookingObj = {userEmail:email ,bookedTimeSlot:bookedTimeSlot, paymentMethod:paymentMethod, date:date,bookedRoom:bookedRoom};

           escapeRoom.findOneAndUpdate({'name':name}, {$push: {'booked': bookingObj}},function(err, doc){
		    if(err) console.log(err);
            flag = 1;
         });
         description = "This is a booking for :" +" "+ ServiceProvider.category +" "+ name +" on "+ bookedTimeSlot +" "+ date +" via "+ paymentMethod + " Room: " + bookedRoom;

            req.flash('success_msg', 'Your booking has been made successfully. Please verify the booking by your chosen way of communication');

            res.redirect('/index');
        }
        }
        if (serviceProvider.category ==='Malahy'){


       var errors = req.validationErrors();

        if(errors){
            res.render('/',{ //virtual page
                errors:errors
            });
        } else {
            var numberOfTickets = req.body.numberOfTickets;
            var businessName = req.body.businessName;
            var bookingObj = {userEmail:email ,numberOfTickets:numberOfTickets};

           malahy.findOneAndUpdate({'businessName':businessName}, {$push: {'bought': bookingObj}},function(err, doc){
		    if(err) console.log(err);
            flag = 1;
         });
         description = "This is a booking for :" +" "+ ServiceProvider.category +" "+  businessName +" with a number of tickets = " + numberOfTickets;
            req.flash('success_msg', 'Your booking has been made successfully. Please verify the booking by your chosen way of communication');

            res.redirect('/index');
        }
        }
        if (serviceProvider.category ==='Trampoline'){
       var businessName= req.body.businessName;
        var errors = req.validationErrors();

        if(errors){
            res.render('/',{ //virtual page
                errors:errors
            });
        } else {
           var bookingObj = {userEmail:email ,bookedTimeSlot:bookedTimeSlot, paymentMethod:paymentMethod, date:date,businessName:businessName};

           trampoline.findOneAndUpdate({'businessName':businessName}, {$push: {'booked': bookingObj}},function(err, doc){
		    if(err) console.log(err);
            flag = 1;
         });
         description = "This is a booking for :" +" "+ ServiceProvider.category +" "+  businessName +" on "+ bookedTimeSlot +" "+ date +" via "+ paymentMethod ;

            req.flash('success_msg', 'Your booking has been made successfully. Please verify the booking by your chosen way of communication');

            res.redirect('/index');
        }
        }
        if (serviceProvider.category ==='Fight'){
        var bookedGame = req.body.bookedGame;
          var bookedField = req.body.bookedField;
          var name= req.body.fightName;

        var errors = req.validationErrors();

        if(errors){
            res.render('/',{ //virtual page
                errors:errors
            });
        } else {
          var bookingObj = {userEmail:email ,bookedTimeSlot:bookedTimeSlot, paymentMethod:paymentMethod, date:date,bookedScreen : bookedScreen,bookedMovie:bookedMovie,bookedSeats:bookedSeats};

           fight.findOneAndUpdate({'name':name}, {$push: {'booked': bookingObj}},function(err, doc){
		    if(err) console.log(err);
            flag = 1;
         });
         description = "This is a booking for :" +" "+ ServiceProvider.category +" "+ name +" on "+ bookedTimeSlot +" "+ date +" via "+ paymentMethod + " Game: " + bookedGame +" BookedField: "+ bookedField;

            req.flash('success_msg', 'Your booking has been made successfully. Please verify the booking by your chosen way of communication');

            res.redirect('/index');
        }
        }
        if (serviceProvider.category ==='Kora'){
        var bookedField = req.body.bookedField;
          var businessName= req.body.businessName;

        var errors = req.validationErrors();

        if(errors){
            res.render('/',{ //virtual page
                errors:errors
            });
        } else {
          var bookingObj = {userEmail:email ,bookedTimeSlot:bookedTimeSlot, paymentMethod:paymentMethod, date:date,bookedScreen : bookedScreen,bookedMovie:bookedMovie,bookedSeats:bookedSeats};

           kora.findOneAndUpdate({'businessName':businessName}, {$push: {'booked': bookingObj}},function(err, doc){
		    if(err) console.log(err);
            flag = 1;
         });
         description = "This is a booking for :" +" "+ ServiceProvider.category +" "+ businessName +" on "+ bookedTimeSlot +" "+ date +" via "+ paymentMethod +" BookedField: "+ bookedField;

            req.flash('success_msg', 'Your booking has been made successfully. Please verify the booking by your chosen way of communication');

            res.redirect('/index');
        }
        }
        if (serviceProvider.category ==='Race'){
        var numberOfPeople = req.body.numberOfPeople;
          var businessName= req.body.businessName;

        var errors = req.validationErrors();

        if(errors){
            res.render('/',{ //virtual page
                errors:errors
            });
        } else {
          var bookingObj = {userEmail:email ,bookedTimeSlot:bookedTimeSlot, paymentMethod:paymentMethod, date:date,bookedScreen : bookedScreen,bookedMovie:bookedMovie,bookedSeats:bookedSeats};

           race.findOneAndUpdate({'businessName':businessName}, {$push: {'booked': bookingObj}},function(err, doc){
		    if(err) console.log(err);
            flag = 1;
         });
          description = "This is a booking for :" +" "+ ServiceProvider.category +" "+ businessName +" on "+ bookedTimeSlot +" "+ date +" via "+ paymentMethod  +" numberOfPeople: "+ numberOfPeople;

            req.flash('success_msg', 'Your booking has been made successfully. Please verify the booking by your chosen way of communication');

            res.redirect('/index');
        }
        }
        if (serviceProvider.category ==='Theatre'){
        var bookedHall = req.body.bookedHall;
          var bookedShow = req.body.bookedShow;
          var bookedSeats = req.body.bookedSeats;
          var name= req.body.theatreName;

        var errors = req.validationErrors();

        if(errors){
            res.render('/',{ //virtual page
                errors:errors
            });
        } else {
          var bookingObj = {userEmail:email ,bookedTimeSlot:bookedTimeSlot, paymentMethod:paymentMethod, date:date,bookedScreen : bookedScreen,bookedMovie:bookedMovie,bookedSeats:bookedSeats};

           theatre.findOneAndUpdate({'name':name}, {$push: {'booked': bookingObj}},function(err, doc){
		    if(err) console.log(err);
            flag = 1;
         });
        description = "This is a booking for :" +" "+ ServiceProvider.category +" "+ name +" on "+ bookedTimeSlot +" "+ date +" via "+ paymentMethod  +" bookedHall: "+ bookedHall+" bookedShow: "+ bookedShow+" bookedSeats: "+ bookedSeats;

            req.flash('success_msg', 'Your booking has been made successfully. Please verify the booking by your chosen way of communication');

            res.redirect('/index');
        }
        }



         if(errors&&(!flag)){
            res.render('booking',{ //virtual page
                errors:errors
            });
        } else {
            var newBookingHistory = new BookingHistory({
                        userEmail : email,
                        description: description ,
                        status :status
            });

            newBookingHistory.save();

            req.flash('success_msg', 'Your booking has been made successfully. Please verify the booking by your chosen way of communication');

            res.redirect('/index');
        }
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
  var new_Rating= new Rating(req.body);
  new_Rating.save(function(err, task) {
    if (err)
     res.send("No rating done");
     else
    res.json(task);
  });
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

viewBooking:  function(req, res){
	if(req.user){
		 email = req.user.email;}
		else{
		email = "reem@gmail.com";
		}

        bookingHistory.find({userEmail: email}, function(err, docs){ //Write the condition you want to display the bookings table from which is email: "Webtoken email"
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

    }




}






module.exports = userController;
