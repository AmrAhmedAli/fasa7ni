var mongoose = require('mongoose');

var trampolineSchema = mongoose.Schema({

    businessName:{
        type:String,
        required:true
    },
    timeSlots: [{
      type: String,
      required: true
    }],

    price: {
      type: Number,
      required: true
    },

    booked:[{
      userEmail: {
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
        enum: ['Online', 'Cash']

    }}]



})

var Trampoline = mongoose.model("trampoline", trampolineSchema);

module.exports = Trampoline;
