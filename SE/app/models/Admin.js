var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var adminSchema = mongoose.Schema({
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    }
)
adminSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

adminSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

var Admin = mongoose.model("admin", adminSchema);

module.exports = Admin;