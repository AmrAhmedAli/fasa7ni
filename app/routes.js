var express = require('express');
var router = express.Router();
var passport = require('passport');

var multer  = require('multer');
var upload = multer({ dest: './uploads'});

var verificationController = require('./controllers/verificationController');
var serviceProviderController= require('./controllers/serviceProviderController');
var visitorController= require('./controllers/visitorController');
var userController=require('./controllers/userController');

router.post('/signupUser', passport.authenticate('local-signup'));

router.post('/signInRequest',passport.authenticate('local-login'),function(req,res){

  console.log('RIGHT');
  console.log('USER');
  res.send(req.user);
});


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

router.get('/signUp',verificationController.signUp);
router.get('/signIn',verificationController.signIn);
router.get('/signOut', verificationController.signOut);

function isLoggedIn(req, res, next) {
   if (req.isAuthenticated())
        return next();
    res.redirect('/');
}

module.exports = router;
