var filter = require('../models/Filter');

var AdminController = {
	addFilter : function(req, res){
  
		var name = req.body.name;
		var field = req.body.field;
		
		var newFilter = new filter({
			'name' : name,
			'field' : field, 
		});
		
		}
}

module.exports = AdminController;