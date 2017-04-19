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
      	type: Number,
        required: true
      },
      booked: [{
        userEmail: {
          type:String,
          required: true
        },
        bookedHall: {
          type: String,
          required: true
        },
        bookedShow:{
          type:String,
          required: true
        },
        bookedSeats: [{
          type: String,
          required: true
        }],
        bookedTimeSlot: {
          type: String,
          required: true
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
