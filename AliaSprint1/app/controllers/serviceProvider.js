var review = require('../models/Reviews');

var reviewController = {
	addReply : function(req, res){

		var reply = req.body.reply;
		var time = req.body.time;
		var title = req.body.title;

		req.checkBody('reply', ' ').notEmpty();
	
		user.update(({'time':time}, { 'title':title }),
			{$set: {'reply': reply}}, callback);
		}
};

module.exports = reviewController;