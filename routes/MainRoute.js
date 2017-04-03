var placesCTRL = require('../controllers/placesCTRL');
var express = require('express');
var router =express.Router();

router.get('/places',placesCTRL.viewPlaces);


module.exports=router;