var mongoose = require('mongoose');


var bookingHistorySchema = mongoose.Schema({
        userEmail: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            required: true
        },
        status: {
          type: String,
          enum: ['Completed', 'Canceled','In Progress']
        }
    }
)

var BookingHistory = mongoose.model("BookingHistory", bookingHistorySchema);

module.exports = BookingHistory;
