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
console.log("IN ROUTES");

router.post('/signupUser',  passport.authenticate('local-signup', { successRedirect : '/', failureRedirect : '/signup', failureFlash : true}));

router.post('/test', function(req,res){
//  JSON.stringify(res body);
  res.send("HI");

  console.log(req.body);
  console.log(JSON.stringify(res.body));
})

router.post('/signinUser', passport.authenticate('local-login-user',{successRedirect : '/', failureRedirect : '/signin', failureFlash : true}));

router.get('/',verificationController.index);


router.post('/postPicturesRedirect', isLoggedIn, function(req,res){
  res.send(req.user);
});
router.post('/postPictures', upload.single('avatar'), serviceProviderController.postPictures);

router.get('/cinemas',visitorController.viewCinemas);
router.get('/concerts',visitorController.viewConcerts);
router.get('/escaperooms',visitorController.viewEscapeRooms);
router.get('/fight',visitorController.viewFights);
router.get('/kora',visitorController.viewKoras);
router.get('/malahy',visitorController.viewMalahy);
router.get('/race',visitorController.viewRace);
router.get('/theatre',visitorController.viewTheatre);
router.get('/trampoline',visitorController.viewTrampoline);

router.post('/search', userController.search);

router.post('/filterByAge', userController.filterByAge);
router.post('/filterByLocation', userController.filterByLocation);

router.get('/signup',verificationController.signup);
router.get('/signIn',verificationController.signIn);
router.get('/signOut', verificationController.signOut);

router.post('/UserController',userController.updateUser);
router.post('/ServiceProviderController', serviceProviderController.updateBusiness);
router.post('AdminController', AdminController.addFilter);

router.post('/serviceProvider',serviceProviderController.addReply);
router.post('/admin', AdminController.blockUser);
router.post('/user', userController.deleteFromBus);

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
router.get('/viewbusinesspage', userController.viewBusinessPage);
router.get('/viewusers',AdminController.viewUsers);

router.get('/SpecialOffers', userController.getAllOffers);
router.get('/Bookings',serviceProviderController.getAllBookings);

//router.get('/tasks',userController.list_all_tasks) ;
//router.post('/create',userController.create_a_task) ;
router.post('/rate',userController.rate_place) ;
//router.get('/maint',userController.maintenacemode) ;
router.get('/count',userController.count_a) ;

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



router.use('/index',function(req,res){

    res.render('index.ejs') ;

}) ;

router.use('/index2',function(req,res){
res.render('index2.ejs') ;
});




router.use('/404',function(req,res){
res.render('404.ejs');

});



function isLoggedInUser(req, res, next) {
   if (req.isAuthenticated()){
	 if(req.user.role==='user')  
	   return next();
	 res.redirect('/');  
   }
        
    res.redirect('/');
};

function isLoggedInProvider(req, res, next) {
   if (req.isAuthenticated()){
	 if(req.user.role==='Service Provider')  
	   return next();
	 res.redirect('/');  
   }
        
    res.redirect('/');
};

function isLoggedInAdmin(req, res, next) {
   if (req.isAuthenticated()){
	 if(req.user.role==='Admin')  
	   return next();
	 res.redirect('/');  
   }
        
    res.redirect('/');
};



module.exports = router;
