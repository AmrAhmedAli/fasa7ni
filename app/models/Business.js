var mongoose = require('mongoose');
//var bcrypt   = require('bcrypt-nodejs');

var businessSchema = mongoose.Schema({

        pname:{
          type: String,
          required: true,
          unique: true
        },
        location: {
            type: String,
            required: true,
            unique: true
        },
        category:{
        	type: String,
        	required: true
        },
        contactInfo: {
        	email: [String], //array
          number: [Number], //array
          
        },

        ageRequirement: {
          type: String,
          required: true
        },

        address: [{
        	type: String,
        	required: false
        }],

        openingHours:{
        	type: String,
        	required:true
        },

        rate :{
        	type: Number,
        	required: true
        },

        logo : {
        	type: String //I will add a default value later
        },

        cancelingPolicy:{
            type: String,
            required: true
        },
        deadlinetoCancel: {
            type: String,
            required: true
        },
        cancelingPenalty:{
            type: Number,
            required:true

        }
    }
)



var Business = mongoose.model("buisness", businessSchema);

module.exports = Business;
