var mongoose = require('mongoose');

var kora = mongoose.Schema({
    businessName:{
        type:String,
        required:true,
        unique:true

    },

    fields:[{
      name:{
      type:String,
      required:true
    },
    availableSlots:[{
      type:String,
      required:true
    }]

  }],
    price: {
      type:String,
      required:true
    },

    booked: [{
      userEmail: {
        type:String,
        required: true
      },
      bookedField:{
        type:String,
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

var Kora = mongoose.model("kora",kora);

module.exports = Kora;
