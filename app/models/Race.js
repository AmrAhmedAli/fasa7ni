var mongoose = require('mongoose');

var race = mongoose.Schema({
    businessName:{
        type:String,
        required:true,
        unique:true

    },
    price:{
      type:String,
      required:true
    },
    availableSlots:[{
      type:String,
      required:true
    }],
    maxNumberOfCarts: {
      type:Number,
      required:true
    },
    minNumberOfPeople: {
      type:Number,
      required:true
    },

    booked: [{
      userEmail: {
        type:String,
        required: true
      },
      numberOfPeople: {
        type: Number,
        required: true
      },
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

})

var Race = mongoose.model("race", race);

module.exports = Race;
