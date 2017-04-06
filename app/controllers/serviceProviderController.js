var Business=require('../models/Business');
var ServiceProvider= require('../models/ServiceProvider');
var BookingHistory =require('../models/BookingHistory');
var Cinema= require('../models/Cinema');
var Concert= require('../models/Concert');
var EscapeRoom= require('../models/EscapeRoom');
var Theatre= require('../models/Theatre');
var Malahy= require('../models/Malahy');
var Trampoline= require('../models/Trampoline');
var Fight=require('../models/Fight');
var Kora= require('../models/Kora');
var Race= require('../models/Race');
//var sendgrid = require('sendgrid')(saraelfakhrany,sara9659515436);

var serviceProviderController = {
  /*sBookingCancel: function(req,res)
  {
    BookingHistory.remove({_id: ObjectId(req.params.id)},function(err,result){
			if(err)
			{
				console.log(err);
			}
			var sendgrid = require('sendgrid');
  			var sender = new sendgrid('saraelfakhrany','sara9659515436');
  			var toEmail = req.params.userEmail;
  			var mail = new sender.Email({
    			to: toEmail,
    			from: 'fasa7ni@gmail.com',
    			subject: 'Cancellation Confirmation',
    			text: 'The cancellation was done sucessfully'
  });
		});
  }*/
  /* WILL BE HANDLED IN THE FRONT END */
}

module.exports = serviceProviderController;
