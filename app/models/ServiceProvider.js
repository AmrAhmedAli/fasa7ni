var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var serviceProviderSchema = mongoose.Schema({
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        businessName: {
          type: String,
          required: true
        },
        category: {
          type: String,
          required: true
        },
        cardNumber:{
          type: String,
          required: true
        },
        holderName:{
          type: String,
          required: true
        },
        cvv: {
          type: String,
          required: true
        },
        validdate: {
          type: String,
          required: true
        }
    }
)



serviceProviderSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

serviceProviderSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

var ServiceProvider = mongoose.model("serviceProvider", serviceProviderSchema);

module.exports = ServiceProvider;
