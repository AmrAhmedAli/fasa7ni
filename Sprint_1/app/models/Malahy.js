var mongoose = require('mongoose');

var malahySchema = mongoose.Schema({
    businessName:{
        type:String,
        required:true,
        unique:true
    },

    tickets:[{
      ticketType:{
        type:String,
        required:true
      },
      games:[String],
      price: {
        type:Number,
        required: true
      }
    }],

    malahyType:{
      type:String,
      required:true
    },

    bought:[{
      userEmail: {
        type: String,
        required: true
      },
      numberOfTickets: {
        type: Number,
        required: true
      }
    }]



})

var Malahy = mongoose.model("malahy", malahySchema);

module.exports = Malahy;
