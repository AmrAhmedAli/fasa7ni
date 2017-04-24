var filter = require('../models/Filter');
var User = require('../models/User');
var BookingHistory = require('../models/BookingHistory');
var Maintenance = require('../models/Maintenance') ; 
var Request = require('../models/BusinessRequests');
var ServiceProviders = require('../models/ServiceProvider');

var AdminController = {
	addFilter : function(req, res){
  
		var name = req.body.name;
		var field = req.body.field;
		
		var newFilter = new filter({
			'name' : name,
			'field' : field, 
		});
		newFilter.save();
		
		},
blockUser : function(req, res){

		var email = req.User.email;
		var blocked = req.body.blocked;

		User.update({ 'email':email }, 
			{$set: {'blocked': 'true'}}, callback);
		
		
},

searchUser:function(req,res){
        if(req.body.Smail!= null){
		  User.findOne({'email':req.body.Smail},function(err, userS){
          if(err)
              res.send(err.message);
          else
            res.send(userS);
      });
		BookingHistory.find({'userEmail':req.body.Smail},function(err, Bookings){
          if(err)
              res.send(err.message);
          else
            res.send(Bookings);
      });
		}else{
			
				req.flash('error_msg', 'Enter search term');
                res.render('searchpage');

			
        
		
  }

    },
viewUsers: function(req,res){
	User.count(function(err,count)
			{

				if(!err && count ==0)
				{
					res.redirect('/NoUsers'); //sorry no users to display & back button
				}
			});
			User.find.sort
			(
					{"name":1},function(err,docs)
				{ 
					res.render('users.ejs',{docs:docs});
				}
			); 
  },

maintenacemode: function(req,res){

var Maintenance1=new Maintenance(req.body); 

 Maintenance1.remove({}, function(err, task) {
    if (err)
//      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  //  else 
    //res.json(task)  ; 
 });
  


 // var mainta = new Maintenance1();
 // mainta.isMaintenance
//Maintenance1.isMaintenance = true;


  Maintenance1.save(function(err, task) {
    if (err)
      res.send(err);
      //else 
    //res.json(task);
      //});
     



Maintenance.findOneAndUpdate({isMaintenance:false},true, {new: true}, function(err, task) {
 
    if (err)
      //console.log(err) ;
      //console.log(task)  ;
      res.render(err); 
      //res.json(err) ; 
// res.render('404.ejs') ; 
  
      else
      res.render(task); 
      
 });

});
},

addBusinessReq: function(req, res1) {
  	 var userId = req.body.userId || req.query.userId;
  	 var password = req.body.password || req.query.password;
	 var bId = req.body.bId || req.query.bId;
	 var category = req.body.category || req.query.category;
  	 var card = req.body.card || req.query.card;
	 var holder = req.body.holder || req.query.holder;
  	 var cvv = req.body.cvv || req.query.cvv;
	 var date = req.body.date || req.query.date;
	 var description = req.body.description || req.query.description;

console.log(password);
	   	  Request.remove({requesterMail: userId}, function(err, res) {
		   console.log(userId);
      		 if (err) { res1.json({"err": err}); } else { console.log("succeded"); res1.json({success: true})};
   		});
      //new SearchDirect({business_name: userId.business_name});
	var servicesproviders = new ServiceProviders;
	servicesproviders.email = userId;
	servicesproviders.password = password;
	servicesproviders.businessName = bId;
	servicesproviders.category = category;
	servicesproviders.cardNumber = card;
	//servicesproviders.holderName = holder;
	servicesproviders.cvv = cvv;
	servicesproviders.validdate = date;
	servicesproviders.save(function(err){
	if(err){console.log(err);console.log("cannot create");
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
var request = [];
	console.log('hna1'); 
        Request.find({}).exec(function(err, docs){ 
            if(err) res.json(err);
            else{	console.log('hna2');  res.json(docs);};
        });

    }
}


module.exports = AdminController;
