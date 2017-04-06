var mongoose = require('mongoose');
//var bcrypt   = require('bcrypt-nodejs');

var businessRequestSchema = mongoose.Schema({

        requesterMail:{
          type: String,
          required: true,
          unique: true;
        },
        description: {
          type: String,
          required: true,
        },
        accepted: {
          type: Boolean,
          default: false
        }
    }
)



var BusinessRequest = mongoose.model("buisness", businessRequestSchema);

module.exports = businessRequest;
