var Places= require('../model/places');


var placesController = {

viewPlaces : function(req,res){
	var place = Places();
			Places.find(function (err, docs) {

			    res.render('ESCAPEplaces.ejs',{
			    	title:'Available places',
					place:docs
			    });

			});
		}
	}

module.exports = placesController;