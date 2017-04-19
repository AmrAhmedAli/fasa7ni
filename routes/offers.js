var express = require('express');
//var offer = require("../model/offer");
var router =express.Router();
var mongoose = require ("mongoose");
var mongojs = require('mongojs');
var flash = require('connect-flash');
var session = require('express-session');
var db =mongoose.connection;
var db = mongojs('milestone2', ['offers'])
var expressValidator = require ('express-validator');
var offers = [];


//express session
router.use(session({
	secret:'secret',
	saveUninitialized :true,
	resave:true
}));


//flash middleware 
router.use(flash());

// Globale vars 
router.use(function(req,res,next){
	res.locals.success_msg=req.flash('success_msg');
	res.locals.error_msg=req.flash('error_msg');
	res.locals.error_msg=req.flash('error');
	res.locals.errors=null;
	next();
});


//home route
router.get('/',function(req,res){
	db.offers.find(function (err, docs) {

	    res.render('offers.ejs',{
	    	title:'Available offers',
			offers:docs
	    });

	});
	
});


// express validator middleware 
router.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

router.post('/',function(req,res){
	
	console.log(req.body.placeName);
	 req.checkBody('placeName', 'PlaceName is required').notEmpty();
	 req.checkBody('category', 'Category is required').notEmpty();
	 req.checkBody('date', 'Date is required').notEmpty();
	 req.checkBody('descriptionn', 'Description is required').notEmpty();
	
	var errors =req.validationErrors();
		console.log(errors);

		if (errors)
		{
			db.offers.find(function (err, docs) {

	    		res.render('offers.ejs',{
	    		title:'Available offers',
				offers:docs,
				errors: errors
	    		});

			});
			
		}else
			{
		
		var newOffer= {
					  placeName:req.body.placeName,
					  category:req.body.category,
				      date:req.body.date,
					  descriptionn:req.body.descriptionn

						}
				db.offers.insert(newOffer,function(err,res){
					if(err)
					{
							console.log(err);
					}
					res.redirect('/');

				});	
}
});

/*router.post('/offer',function(req,res){
//validation
	

	

			var newOffer = new offer({
						placeName:req.body.placeName,
						category:req.body.category,
						date:req.body.date,
						descriptionn:req.body.descriptionn,

					});
			offer.createOffer(newOffer,function(err,user){
					if(err) throw err;
					console.log(offer);

			});
			req.flash('success_msg','Done');
			res.redirect('./offer');
		}


});
*/
module.exports=router;