var mongoose = require('mongoose');

var review = mongoose.Schema({
    nameOfUser:{
        type:String,
        required:true,

    },
    date:{
      type:Date,
      required:true,
      default: Date.now
    },
    title:{
      type:String,
      required:true
    },
    body: {
      type:String,
      required:true
    },

    reply: {
      type:String
    },
    category: {
      type:String,
      required:true
    },
    businessName:
    {
      type:String,
      required:true
    },
    photoPath: {
      type:String,
    }


})

var Review = mongoose.model("reviews", review);

module.exports = Review;
