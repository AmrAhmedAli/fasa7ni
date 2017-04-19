var mongoose = require('mongoose');


var userSchema = mongoose.Schema({

        name:{
          type: String,
          required: true
        }
        
    })

var Places = mongoose.model("Places", userSchema);

module.exports = Places;