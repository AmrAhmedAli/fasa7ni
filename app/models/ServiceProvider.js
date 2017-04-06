var mongoose = require('mongoose');


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


var ServiceProvider = mongoose.model("serviceProvider", serviceProviderSchema);

module.exports = ServiceProvider;
