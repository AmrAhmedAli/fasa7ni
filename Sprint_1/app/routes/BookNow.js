var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var Booking = require('../models/booking');

// Register
router.get('/', function(req, res){
	res.render('booking');
});

// Login
router.get('/cancelBooking', function(req, res){
	//res.render('Cancel');
});

// Register User
router.post('/', function(req, res){
	var email = null;//m7taga ttzbat
	var paymenttype = 0;
	var time = req.body.time;
	var date = req.body.date;
	var roomtype = req.body.roomtype;
	var no_ofPeople = req.body.no_ofPeople;
	var companyBooked = null;//change to esm el company
	var isBookingVerified = false;
	if(req.body.paymenttype=="Cash"){
	  paymenttype = -1;
	}
	if(req.body.paymenttype=="CreditCard"){
		 paymenttype = req.body.credit;
	}

	// Validation
	//req.checkBody('paymenttype', 'Name is required').notEmpty();
	req.checkBody('time', 'Time is required').notEmpty();
	req.checkBody('date', 'Date is required').notEmpty();
	req.checkBody('roomtype', 'Room type is required').notEmpty();
	req.checkBody('no_ofPeople', 'no_ofPeople is required').notEmpty();
	

	var errors = req.validationErrors();

	if(errors){
		res.render('booking',{
			errors:errors
		});
	} else {
		var newBooking = new Booking({
					email : email,
					paymenttype: paymenttype ,
					time :time,
					date:date,
					roomtype : roomtype,
					no_ofPeople : no_ofPeople,
					companyBooked : companyBooked,
					isBookingVerified : isBookingVerified
		});

		Booking.createBooking(newBooking, function(err, booking){
		//	if(err) throw err;
			console.log(booking);
		});

		req.flash('success_msg', 'Your booking has been made successfully. Please verify the booking by your chosen way of communication');

		res.redirect('/index');
	}
});


router.post('/cancelBooking', function(req, res){
	
});




module.exports = router;