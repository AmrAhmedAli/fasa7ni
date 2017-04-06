var mongoose = require('mongoose');


var userSchema = mongoose.Schema({

        name:{
          type: String,
          required: true
        }
        
    })

var categories = mongoose.model("categories", userSchema);

module.exports = categories;