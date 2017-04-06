
var express = require('express');
var router = express.Router();



var serviceProviderController= require('./controllers/serviceProviderController');
var visitorController= require('./controllers/visitorController');
var userController=require('./controllers/userController');
var AdminController = require('./controllers/AdminController');



    //router.get('/',mainCTRL.mainPage);//fake controller will be used later to feedin the index page
	router.post('/booking',userController.postBooking);
	router.get('/booking',userController.viewBooking);
	router.get('/businessreq', AdminController.viewBusinessReq);
	router.post('/businessreq', visitorController.postBusinessReq);
	router.post('/deleteReq', AdminController.deleteBusinessReq);
	router.post('/addReq', AdminController.addBusinessReq);
	router.post('/business', serviceProviderController.addBusiness);
	router.get('/searchdirect',userController.viewSearchDirect);
    


module.exports = router;
