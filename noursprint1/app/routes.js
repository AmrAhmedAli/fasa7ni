var express = require('express');
var router = express.Router();

var UserController = require('../app/controllers/UserController');
var ServiceProviderController = require('../app/controllers/ServiceProviderController');
var AdminController = require('../app/controllers/AdminController');



router.post('/UserController',UserController.updateUser);
router.post('/ServiceProviderController', ServiceProviderController.updateBusiness);
router.post('AdminController', AdminController.addFilter);

module.exports = router;