var mongoose = require('mongoose');

var escapeRoomSchema = mongoose.Schema({
      name: {
            type: String,
            unique: true,
            required: true
        },
      room:[{
        name: String,
        price: Number,
        timeSlots: [String],
        minAge: Number,
        minAgeNumber:Number,
        maxTeamNumber: Number,
        }],
      booked: [{
        userEmail: {
          type:String,
          required: true
        },
        bookedRoom: {
          type: String,
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
          type: Date,
          }
      }]

    }
)


var EscapeRoom = mongoose.model("escapeRoom", escapeRoomSchema);

module.exports = EscapeRoom;
