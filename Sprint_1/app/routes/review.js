var express = require('express');
var router = express.Router();
var review = require('../models/review');
//dependecies :- logged in user email , review id

app.use(function (req, res, next) {
  res.locals.reviewR = null;
  next();
});


router.get('/', function(req, res){
	//res.render('booking');
});

router.post('/provider', function(req, res){
	var poster_email = null;//m7taga ttzbat
	var provider_reply = 0;
	var msg_title = req.body.msg_title;
	var msg_body = req.body.msg_body;

	// Validation
	//req.checkBody('paymenttype', 'Name is required').notEmpty();
	req.checkBody('msg_title', 'msg_title is required').notEmpty();
	req.checkBody('msg_body', 'msg_body is required').notEmpty();
	

	var errors = req.validationErrors();

	if(errors){
		res.render('index',{
			errors:errors
		});
	} else {
		var newReview = new review({
					poster_email : poster_email,
					provider_reply: provider_reply ,
					msg_title :msg_title,
					msg_body:msg_body,
		});

		review.createReview(newReview, function(err, review){
		//	if(err) throw err;
			console.log(review);
			reviewR = review;
		});
		var no = reviewR.reviewno;
  //waiting for dependecies change old eli fel awl
  review.findByIdAndUpdate(old._id, {$set: {provider_reply: reviewR.reviewno}},function(err, doc){
		if(err) console.log(err);
  });

		req.flash('success_msg', 'review posted');

		res.redirect('/index');
	}
});









module.exports = router;