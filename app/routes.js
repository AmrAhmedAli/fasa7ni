//sara
var express = require('express');
var router = express.Router();

//var sendgrid = require('sendgrid')(saraelfakhrany,sara9659515436);

var app = express();



var serviceProviderController= require('./controllers/serviceProviderController');
var reviewController= require('./controllers/reviewController');
var userController=require('./controllers/userController');
var adminController=require('./controllers/adminController');


router.get('/viewbusinesspage', userController.viewBusinessPage);

router.get('/viewusers',adminController.viewUsers);

//router.delete('/bookingcancel/:id',serviceProviderController.sBookingCancel);

module.exports = router;
