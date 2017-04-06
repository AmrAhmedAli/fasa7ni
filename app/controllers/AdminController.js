var Request = require('../models/BusinessRequests');
//var SearchDirect = require('../models/searchdirect');
var ServiceProviders = require('../models/ServiceProvider');




var AdminController = {


addBusinessReq: function(req, res1) {
  	 var userId = req.body.userId || req.query.userId;
  	 var password = req.body.password || req.query.password;
	 var bId = req.body.bId || req.query.bId;
  	 var card = req.body.card || req.query.card;
	 var holder = req.body.holder || req.query.holder;
  	 var cvv = req.body.cvv || req.query.cvv;
	 var date = req.body.date || req.query.date;
	 var description = req.body.description || req.query.description;
	   console.log(userId);
	   console.log(bId);

	   	  Request.remove({requesterMail: userId}, function(err, res) {
		   console.log(userId);
      		 if (err) { res1.json({"err": err}); } else { console.log("succeded"); res1.json({success: true})};
   		});
      //new SearchDirect({business_name: userId.business_name});
	var servicesproviders = new ServiceProviders;
	servicesproviders.email = userId;
	servicesproviders.password = password;
	servicesproviders.businessName = bId;
	servicesproviders.cardNumber = card;
	servicesproviders.holderName = holder;
	servicesproviders.cvv = cvv;
	servicesproviders.validdate = date;
	servicesproviders.save(function(err){
	if(err){console.log("cannot create");
	}else{
	console.log("created");
	}
});

	},

deleteBusinessReq: function(req, res1) {
  	 var userId = req.body.userId || req.query.userId;
	   console.log("here");
 	  Request.remove({requesterMail: userId}, function(err, res) {
		   console.log(userId);
      		 if (err) { res1.json({"err": err}); } else { console.log("succeded"); res1.json({success: true})};
   		});
	},

viewBusinessReq:  function(req, res){
        Request.find({}, function(err, docs){ 
            if(err) res.json(err);
            else res.render('../views/acc_del', {requests: docs});
        });

    }

}
module.exports = AdminController;
