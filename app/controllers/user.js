var business = require('../models/Business');
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
var user = require('../models/User');


var cancelBooking = {
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
	
	}
}

module.exports = cancelBooking;