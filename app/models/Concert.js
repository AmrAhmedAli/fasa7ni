var mongoose = require('mongoose');

var concertSchema = mongoose.Schema({

    businessName:{
        type:String,
        required:true
    },
    eventName: {
      type: String,
      required: true
    },
    timeSlot: {
      type: String,
      required: true
    },
    eventDate:{
      type: Date,
      required:true
    },
    price:{
      type: Number,
      required: true
    },

    booked:[{
      userEmail: {
        type: String,
        required: true
      },

      bookedEventName: {
        type: String,
        required: true
      },
      bookedTimeSlot: {
        type: String,
        required: true
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
