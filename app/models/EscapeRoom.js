var mongoose = require('mongoose');

var escapeRoomSchema = mongoose.Schema({
      name: {
            type: String,
            unique: true,
            required:true

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
          type:String
        },
        bookedRoom: {
          type: String
        },
        bookedTimeSlot: {
          type: String
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
