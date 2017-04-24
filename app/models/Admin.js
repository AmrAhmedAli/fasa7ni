var mongoose = require('mongoose');


var adminSchema = mongoose.Schema({
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        role:{
            type: String,
            default: 'Admin'
        }
    }
)


var Admin = mongoose.model("admin", adminSchema);

module.exports = Admin;
