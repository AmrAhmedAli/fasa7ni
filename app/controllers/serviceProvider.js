var review = require('../models/Reviews');

var reviewController = {
	addReply : function(req, res){

		var reply = req.body.reply;
		var id = req.body.id;
		
		//req.checkBody('reply', ' ').notEmpty();
	
		review.findOneAndUpdate({'_id':id},
			{$set: {'reply': reply}}, function(err,doc){
				if(err)console.log(err);
				console.log(doc);
			});
		}
};

module.exports = reviewController;