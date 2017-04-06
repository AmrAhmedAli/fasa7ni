var ServiceProvider= require('../models/ServiceProvider');
var BookingHistory = require('../models/BookingHistory');
var User = require('../models/User.js');

var cinema= require('../models/Cinema');
var concert= require('../models/Concert');
var escapeRoom= require('../models/EscapeRoom');
var theatre= require('../models/Theatre');
var malahy= require('../models/Malahy');
var Trampoline= require('../models/Trampoline');
var Fight=require('../models/Fight');
var Kora= require('../models/Kora');
var Race= require('../models/Race');


var bookingController = {
    searchUser:function(req,res){
        if(req.body.Smail!= null){
		  User.findOne({'email':req.body.Smail},function(err, userS){
          if(err)
              res.send(err.message);
          else
            res.send(userS);
      });
		BookingHistory.find({'userEmail':req.body.Smail},function(err, Bookings){
          if(err)
              res.send(err.message);
          else
            res.send(Bookings);
      });
		}else{
			
				req.flash('error_msg', 'Enter search term');
                res.render('searchpage');

			
        
		
  }

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
    }
}



module.exports = bookingController;
