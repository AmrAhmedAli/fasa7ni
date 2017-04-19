var mongoose = require('mongoose');
//var bcrypt   = require('bcrypt-nodejs');

var businessSchema = mongoose.Schema({

        name:{
          type: String,
          required: true
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
        contactInfo:{
        	email: [String], //array
          number: [Number] //array
        },

        ageRequirement: {
          type: String,
          required: true
        },

        address: [{
        	type: String,
        	required: true
        }],

        openingHours:{
        	type: String,
        	required:true
        },

        rate :{
        	type: Number,
            default : 0 
        },

        logo : {
        	type: String //I will add a default value later
        },

        cancelingPolicy:{
            type: String,
            required: true
        },
        deadlinetoCancel: {
            type: Date,
            required: true
        },
        cancelingPenalty:{
            type: Number,
            required:true

        }
    }
)



var Business = mongoose.model("business", businessSchema);

module.exports = Business;
