var express = require('express');
var router = express.Router();
var passport = require('passport');

var multer  = require('multer');
var upload = multer({ dest: './uploads'});

var verificationController = require('./controllers/verificationController');
var serviceProviderController= require('./controllers/serviceProviderController');
var visitorController= require('./controllers/visitorController');
var userController=require('./controllers/userController');
var AdminController = require('./controllers/AdminController');


//sign up .. in both success and failure senarios rediirect to sign up to send message in flash
router.post('/signupUser', passport.authenticate('local-signup', {successRedirect:'/signup',failureRedirect: '/signup',successFlash: true, successFlash: false}));
//sign in user using predefined function authenticate and local login user strategy
router.post('/signinUser', passport.authenticate('local-login-user',{successRedirect : '/signin', failureRedirect : '/signin', successFlash: true, failureFlash: true}));

//sign in admin using predefined function authenticate and local login user strategy .. signin sends message
router.post('/signinProvider', passport.authenticate('local-login-provider',{successRedirect : '/signin', failureRedirect : '/signin', failureFlash : true}));

//sign in admin using predefined function authenticate and local login user strategy .. signin sends message
router.post('/signinAdmin', passport.authenticate('local-login-admin',{successRedirect : '/signin', failureRedirect : '/signin', failureFlash : true}));

router.post('/postPicturesRedirect', isLoggedInProvider, function(req,res){
  res.send(req.user);
});
router.post('/postPictures', upload.single('avatar'), serviceProviderController.postPictures);


router.post('/updateCat/cinemas',serviceProviderController.updateCinema);
router.post('/updateCat/concerts',serviceProviderController.updateConcerts);
router.post('/updateCat/escapeRooms',serviceProviderController.updateEscapeRooms);
router.post('/updateCat/fight',serviceProviderController.updateFight);
router.post('/updateCat/kora',serviceProviderController.updateKora);
router.post('/updateCat/malahy',serviceProviderController.updateMalahy);
router.post('/updateCat/race',serviceProviderController.updateRace);
router.post('/updateCat/theatre',serviceProviderController.updateTheatre);
router.post('/updateCat/trampolines',serviceProviderController.updateTrampoline);

router.get('/filters',visitorController.getAllFilters);
router.get('/cinemasReviews',visitorController.viewCinemas); //view reviews
router.get('/concertsReviews',visitorController.viewConcerts); //view reviews
router.get('/escaperoomsReviews',visitorController.viewEscapeRooms); //view reviews
router.get('/fightReviews',visitorController.viewFights); //view reviews
router.get('/koraReviews',visitorController.viewKoras); //view reviews
router.get('/malahyReviews',visitorController.viewMalahy); //view reviews
router.get('/raceReviews',visitorController.viewRace); //view reviews
router.get('/theatreReviews',visitorController.viewTheatre); //view reviews
router.get('/trampolineReviews',visitorController.viewTrampoline); //view reviews

router.post('/postreview', userController.postReviews);

router.post('/search', userController.search);

router.post('/filterByAge', userController.filterByAge);
router.post('/filterByLocation', userController.filterByLocation);

router.get('/signUp',verificationController.signup); //to get message
router.get('/signIn',verificationController.signIn); //to get message
router.post('/signOut', verificationController.signOut); // to get message

router.post('/UserController',userController.updateUser);
router.post('/ServiceProviderController', serviceProviderController.updateBusiness);
router.post('/addFilter', AdminController.addFilter);

router.post('/serviceProvider',serviceProviderController.addReply);
router.post('/admin', AdminController.blockUser);
router.post('/cancelBook', userController.deleteFromBus);

//places
router.get('/cinemas',userController.viewCinemas);
router.get('/concerts',userController.viewConcerts);
router.get('/escapeRooms',userController.viewEscapeRooms);
router.get('/fights',userController.viewFights);
router.get('/kora',userController.viewKora);
router.get('/malahy',userController.viewMalahy);
router.get('/races',userController.viewRaces);
router.get('/trampolines',userController.viewTrampolines);
router.get('/theatres',userController.viewTheatres);

//categories
router.get('/categories',userController.viewCategories);

//offers
router.get('/offers',serviceProviderController.viewOffers);
router.post('/offers',serviceProviderController.postOffers);

//update
router.get('/update',serviceProviderController.viewUpdate);
router.get('/update/addNum',serviceProviderController.addContactInfoNum);
router.get('/update/addEmail',serviceProviderController.addContactInfoEmail);
router.get('/update/updNum',serviceProviderController.updateContactInfoNum);
router.get('/update/updEmail',serviceProviderController.updateContactInfoEmail);
router.post('/update/addNum',serviceProviderController.addContactInfoNum);
router.post('/update/addEmail',serviceProviderController.addContactInfoEmail);
router.post('/update/updNum',serviceProviderController.updateContactInfoNum);
router.post('/update/updEmail',serviceProviderController.updateContactInfoEmail);


router.post('/booknow', userController.newBooking);//karim
router.post('/SearchUser',AdminController.searchUser);
router.get('/viewMalahyp/:bus_name', userController.viewMalahyp);
router.get('/viewConcertp/:bus_name', userController.viewConcertp);
router.get('/viewRacep/:bus_name', userController.viewRacep);
router.get('/viewTrampolinep/:bus_name', userController.viewTrampolinep);
router.get('/viewCinemap/:bus_name', userController.viewCinemap);
router.get('/viewEscapep/:bus_name', userController.viewEscapep);
router.get('/viewFightp/:bus_name', userController.viewFightp);
router.get('/viewKorap/:bus_name', userController.viewKorap);
router.get('/viewTheatrep/:bus_name', userController.viewTheatrep);
router.get('/getusrs',AdminController.getUsrs);
router.post('/blockusr', AdminController.blockUser);
router.post('/unblockusr', AdminController.unblockUser);
router.get('/viewbusinesspage', serviceProviderController.viewBusinessPage);
router.get('/viewusers',AdminController.viewUsers);

router.get('/SpecialOffers', userController.getAllOffers);
router.get('/Bookings',serviceProviderController.getAllBookings);
router.get('/Sbooks',serviceProviderController.newBooks);
router.post('/stat',serviceProviderController.stat);


//router.get('/tasks',userController.list_all_tasks) ;
//router.post('/create',userController.create_a_task) ;
router.post('/rate',userController.rate_place) ; 
//router.get('/maint',userController.maintenacemode) ;
router.get('/countUsers',userController.countUsers) ;
router.post('/view',userController.view2) ; 

//router.get('/task4',userController.read_a_task) ;
//router.put('/task4',userController.update_a_task);
//router.delete('/task4',userController.delete_a_task);

	router.post('/booking',userController.postBooking);
	router.get('/booking',userController.viewBooking);
	router.get('/businessreq', AdminController.viewBusinessReq);
	router.post('/businessreq', visitorController.postBusinessReq);
	router.post('/deleteReq', AdminController.deleteBusinessReq);
	router.post('/addReq', AdminController.addBusinessReq);
	router.post('/business', serviceProviderController.addBusiness);
	router.get('/searchdirect',userController.viewSearchDirect);

router.post('/updateUser',userController.updateUser);
router.post('/updateBusiness', serviceProviderController.updateBusiness);
router.get('/viewMyprofile', userController.viewMyprofile);
router.get('/viewBusinessProfile', serviceProviderController.viewBusinessProfile);
router.get('/viewServiceP', serviceProviderController.getServiceP);

router.get('/viewSreviews', serviceProviderController.viewSreviews);


router.post('/updateCat/cinemas',serviceProviderController.updateCinema);
router.post('/updateCat/concerts',serviceProviderController.updateConcerts);
router.post('/updateCat/escapeRooms',serviceProviderController.updateEscapeRooms);
router.post('/updateCat/fight',serviceProviderController.updateFight);
router.post('/updateCat/kora',serviceProviderController.updateKora);
router.post('/updateCat/malahy',serviceProviderController.updateMalahy);
router.post('/updateCat/race',serviceProviderController.updateRace);
router.post('/updateCat/theatre',serviceProviderController.updateTheatre);
router.post('/updateCat/trampolines',serviceProviderController.updateTrampoline);



router.use('/index',function(req,res){

    res.render('index.ejs') ;

}) ;

router.use('/index2',function(req,res){
res.render('index2.ejs') ;
});




router.use('/404',function(req,res){
res.render('404.ejs');

});


function isLoggedInUser(req, res, next) { // check if the logged in
   if (req.isAuthenticated()){
	 if(req.user.role==='User') // check if it is a user
	   return next();
	 res.redirect('/');
   }

    res.redirect('/');
};

function isLoggedInProvider(req, res, next) { //check if logged in
   if (req.isAuthenticated()){
	 if(req.user.role==='Service Provider') //check if it is a service provider
	   return next();
	 res.redirect('/');
   }

    res.redirect('/');
};

function isLoggedInAdmin(req, res, next) { // check if logged in
   if (req.isAuthenticated()){
	 if(req.user.role==='Admin') //check if admin
	   return next();
	 res.redirect('/');
   }

    res.redirect('/');
};


module.exports = router;
