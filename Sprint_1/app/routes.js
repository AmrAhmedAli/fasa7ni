var express = require('express');
var router = express.Router();
var passport = require('passport');

var multer  = require('multer');
var upload = multer({ dest: './uploads'});

var verificationController = require('./controllers/verificationController');
var serviceProviderController= require('./controllers/serviceProviderController');
var reviewController= require('./controllers/reviewController');
var userController=require('./controllers/userController');
var bookingController=require('./controllers/bookingController');


router.post('/signupUser', verificationController.userSignUp );

router.post('/signInRequest',passport.authenticate('local-login',{successRedirect: '/index',
        failureRedirect: '/signin', failureFlash: true }));

router.post('/postPictures', upload.any(),serviceProviderController.postPictures);

router.get('/cinemas',reviewController.viewCinemas);
router.get('/concerts',reviewController.viewConcerts);
router.get('/escaperooms',reviewController.viewEscapeRooms);
router.get('/fight',reviewController.viewFights);
router.get('/kora',reviewController.viewKoras);
router.get('/malahy',reviewController.viewMalahy);
router.get('/race',reviewController.viewRace);
router.get('/theatre',reviewController.viewTheatre);
router.get('/trampoline',reviewController.viewTrampoline);

router.post('/search', userController.search);
router.post('/booknow', bookingController.newBooking);//karim
router.post('/SearchUser',bookingController.searchUser);

router.post('/filterByAge', userController.filterByAge);
router.post('/filterByLocation', userController.filterByLocation);

router.get('/signUp',verificationController.signUp);
router.get('/signIn',verificationController.signIn);
router.get('/signOut', verificationController.signOut);

function isLoggedIn(req, res, next) {
   if (req.isAuthenticated())
        return next();
    res.redirect('/');
}

module.exports = router;
