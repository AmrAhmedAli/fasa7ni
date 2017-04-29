var mongoose = require('mongoose');

var theatreSchema = mongoose.Schema({
      name: {
            type: String,
            unique: true,
            required: true
        },
      hall:[{
        name: String,
        shows: [String],
        seats: [String],
        timeSlots:[String],
        //required: true,
      }],
      price: {
      	type: Number
      },
      booked: [{
        userEmail: {
          type:String
        },
        bookedHall: {
          type: String
        },
        bookedShow:{
          type:String
        },
        bookedSeats: [{
          type: String
        }],
        bookedTimeSlot: {
          type: String
        },
        paymentMethod: {
          type: String,
          enum: ['Online', 'Cash']
        },
        date: {
          type: Date
        }
      }]

    }
)


var Theatre = mongoose.model("theatre", theatreSchema);

module.exports = Theatre ;
