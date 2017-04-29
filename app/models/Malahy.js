var mongoose = require('mongoose');

var malahySchema = mongoose.Schema({
    businessName:{
        type:String,
        required:true,
	unique: true
    },

    tickets:[{
      ticketType:{
        type:String
      },
      games:[String],
      price: {
        type:Number
      }
    }],

    malahyType:{
      type:String
    },

    bought:[{
      userEmail: {
        type: String
      },
       BookedticketType:{
        type:String
      },
      numberOfTickets: {
        type: Number
      }
    }]



})

var Malahy = mongoose.model("malahy", malahySchema);

module.exports = Malahy;
