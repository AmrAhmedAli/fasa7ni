var mongoose = require('mongoose');


var bookingHistorySchema = mongoose.Schema({
        userEmail: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        status: {
          type: String,
          enum: ['Completed', 'Canceled','In Progress']
        },
	busname:{
		type:String
	},
	buscat:{
		type:String
	},
	catid:{
		type:String
	}
    }
)

var BookingHistory = mongoose.model("BookingHistory", bookingHistorySchema);

module.exports = BookingHistory;
