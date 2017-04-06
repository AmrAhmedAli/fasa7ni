var Booking = require('../models/BookingHistory');
var Business = require('../models/Business');

var userController = {


viewBooking:  function(req, res){
        Booking.find({userEmail: req.user.email}, function(err, docs){ //Write the condition you want to display the bookings table from which is email: "Webtoken email"
            if(err) res.json(err);
            else res.render('../views/view', {bookings: docs});
        });

    },

postBooking: function(req, res){
        var booking = new Booking();
        booking.userEmail = req.body.userEmail;
        booking.description = req.body.description;
        booking.status = req.body.status;
        booking.save(function(err){
             if (err) {
                 res.send("Cannot create");
                }else{
                    res.send("Created Successfuly");
                }
            });
    },

viewSearchDirect:  function(req, res){
        Business.find({}, function(err, docs){ 
            if(err) res.json(err);
            else res.render('../views/searchdirect', {buisnesses: docs});
        });

    }
}
module.exports = userController;
