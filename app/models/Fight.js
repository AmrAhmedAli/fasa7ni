var mongoose = require('mongoose');

var fightSchema = mongoose.Schema({
      name: {
            type: String,
            unique: true,
            required: true
        },
      game:[{
        name: String,
        fields: [String],
        price: Number,
        minAge: Number,
        teamMinNumber: Number,
        teammaxNumber: Number,
        timeSlots:[String]

      }],
      booked: [{
        userEmail: {
          type:String
        },
        bookedGame: {
          type: String
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

    }
)


var Fight = mongoose.model("fight", fightSchema);

module.exports = Fight ;
