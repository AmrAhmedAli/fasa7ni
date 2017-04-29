var mongoose = require('mongoose');

var trampolineSchema = mongoose.Schema({

    businessName:{
        type:String,
        required:true,
	unique:true
    },
    timeSlots: [{
      type: String
    }],

    price: {
      type: Number
    },

    booked:[{
      userEmail: {
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
        enum: ['Online', 'Cash']

    }}]



})

var Trampoline = mongoose.model("trampoline", trampolineSchema);

module.exports = Trampoline;
