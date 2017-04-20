var serviceProvider = require('../app/controllers/serviceProvider');
var admin = require('../app/controllers/admin');
var user = require('../app/controllers/user');
var express = require('express');
var router = express.Router();

router.post('/serviceProvider',serviceProvider.addReply);
router.post('/admin', admin.blockUser);
router.post('/user', user.deleteFromBus);

module.exports = router;
