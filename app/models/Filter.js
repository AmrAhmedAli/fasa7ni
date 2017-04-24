var mongoose = require('mongoose');

var filterSchema = mongoose.Schema({

        name:{
            type: String,
            required: true,
        },
        field:{
            type: String,
            required: true,
        }
    
});

var filter = mongoose.model("filter", filterSchema);

module.exports = filter;
