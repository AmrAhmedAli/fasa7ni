var mongoose = require('mongoose');
//var bcrypt   = require('bcrypt-nodejs');

var businessRequestSchema = mongoose.Schema({

        requesterMail:{
          type: String,
          required: true,
          unique: true
        },
 	password: {
            type: String,
            required: true
        },
        businessName: {
          type: String,
          required: true
        },
	category: {
          type: String,
          required: true
        },
        cardNumber:{
          type: String,
          required: true
        },
        holderName:{
          type: String,
          required: true
        },
        cvv: {
          type: String,
          required: true
        },
        validdate: {
          type: String,
          required: true
        },
        description: {
          type: String,
          required: false, 
        }
    }
)



var BusinessRequest = mongoose.model("buisnessreq", businessRequestSchema);

module.exports = BusinessRequest;
