var mongoose = require('mongoose');

var offer = mongoose.Schema({
    businessName:{
        type:String,
        required:true,

    },
    description:{
      type:String,
      required:true
    },
    category:{
      type:String,
      required:true
    },
    validTill: {
      type:String,
      required:true
    },
    logoPath: {
      type:String
    }

})

var Offer = mongoose.model("offers", offer);

module.exports = Offer;
