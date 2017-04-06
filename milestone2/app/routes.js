var serviceProviderCTRL = require('./controllers/serviceProviderCTRL');
var userCTRL = require('./controllers/userCTRL');
var express = require('express');
var router =express.Router();

//places
router.get('/cinemas',userCTRL.viewCinemas);
router.get('/concerts',userCTRL.viewConcerts);
router.get('/escapeRooms',userCTRL.viewEscapeRooms);
router.get('/fights',userCTRL.viewFights);
router.get('/kora',userCTRL.viewKora);
router.get('/malahy',userCTRL.viewMalahy);
router.get('/races',userCTRL.viewRaces);
router.get('/trampolines',userCTRL.viewTrampolines);
router.get('/theatres',userCTRL.viewTheatres);

//categories
router.get('/categories',userCTRL.viewCategories);

//offers
router.get('/offers',serviceProviderCTRL.viewOffers);
router.post('/offers',serviceProviderCTRL.postOffers);

//update
router.get('/update',serviceProviderCTRL.viewUpdate);
router.get('/update/addNum',serviceProviderCTRL.addContactInfoNum);
router.get('/update/addEmail',serviceProviderCTRL.addContactInfoEmail);
router.get('/update/updNum',serviceProviderCTRL.updateContactInfoNum);
router.get('/update/updEmail',serviceProviderCTRL.updateContactInfoEmail);
router.post('/update/addNum',serviceProviderCTRL.addContactInfoNum);
router.post('/update/addEmail',serviceProviderCTRL.addContactInfoEmail);
router.post('/update/updNum',serviceProviderCTRL.updateContactInfoNum);
router.post('/update/updEmail',serviceProviderCTRL.updateContactInfoEmail);

module.exports=router;