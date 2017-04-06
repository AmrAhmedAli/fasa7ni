// require dependincies
var express = require('express');
var router = express.Router();

var serviceProviderController= require('./controllers/serviceProviderController');

var userController=require('./controllers/userController');

// add routes
router.get('/SpecialOffers', userController.getAllOffers);
router.get('/Bookings',serviceProviderController.getAllBookings);





// export router

module.exports = router;
