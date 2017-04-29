var mongoose = require('mongoose');

var concertSchema = mongoose.Schema({

    businessName:{
        type:String,
        required:true
    },
    eventName: {
      type: String
    },
    timeSlot: {
      type: String
    },
    eventDate:{
      type: Date
    },
    price:{
      type: Number
    },

    booked:[{
      userEmail: {
        type: String
      },

      bookedEventName: {
        type: String
      },
      bookedTimeSlot: {
        type: String
      },
      date: {
        type: Date
      },
      paymentMethod: {
        type: String,
        enum: ['Online', 'Cash']}}]

      })


var Concert = mongoose.model("concert", concertSchema);

module.exports = Concert;
