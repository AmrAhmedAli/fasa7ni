var mongoose = require('mongoose');

var race = mongoose.Schema({
    businessName:{
        type:String,
        required:true,
        unique:true

    },
    price:{
      type:String
    },
    availableSlots:[{
      type:String
    }],
    maxNumberOfCarts: {
      type:Number
    },
    minNumberOfPeople: {
      type:Number
    },

    booked: [{
      userEmail: {
        type:String
      },
      numberOfPeople: {
        type: Number
      },
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

})

var Race = mongoose.model("race", race);

module.exports = Race;
