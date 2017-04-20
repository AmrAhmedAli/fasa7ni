var mongoose = require('mongoose');

var reviewSchema = mongoose.Schema({
        name: {
            type: String,
            required: true,
            default: 'Anonymous'
        },
        title: {
            type: String
        },
        body: {
            type: String,
            required: true
        },
        date: {
            type: String
        },

        photosURL:[{
            type: String
        }]

    }
)


var Review = mongoose.model("review1", reviewSchema);

module.exports = Review ;
