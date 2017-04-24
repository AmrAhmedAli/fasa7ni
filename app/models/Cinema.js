var mongoose = require('mongoose');

var cinemaSchema =  mongoose.Schema({
      name: {
            type: String,
            
            required: true
        },
      screenNumber:[{
        name: String,
        movies:[String],
        seats: [String],
        timeSlots:String
      }],
      price: {
      	type: Number,
        required: true
      },
      photosURL: [{
        type:String
      }],
      booked: [{
        userEmail: String,
        bookedScreen:String,
        bookedMovie:String,
        bookedSeats:[String],
        bookedTimeSlot:String,
        paymentMethod: {
          type: String,
          enum: ['Online', 'Cash']
        },
        date:{
		      type:Date}
	       }
      ]

    }
);


var Cinema = mongoose.model("cinema", cinemaSchema);

module.exports = Cinema ;
