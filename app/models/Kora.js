var mongoose = require('mongoose');

var kora = mongoose.Schema({
    businessName:{
        type:String,
        required:true,
        unique:true

    },

    fields:[{
      name:{
      type:String
    },
    availableSlots:[{
      type:String
    }]

  }],
    price: {
      type:String
    },

    booked: [{
      userEmail: {
        type:String
      },
      bookedField:{
        type:String
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

var Kora = mongoose.model("kora",kora);

module.exports = Kora;
