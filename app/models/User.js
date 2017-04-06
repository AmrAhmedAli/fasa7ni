var mongoose = require('mongoose');


var userSchema = mongoose.Schema({

        name:{
          type: String,
          required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        birthdate: {
          type: Date,
          required: true
        },

        gender :{
          type: String,
          enum:['Female', 'Male']
        },
        homelocation:{
          type: String
        },
        contact: {
            type: String,
            enum: ['Phone', 'E-mail']
        },

        cardNumber:{
          type: String
        },
        holderName:{
          type: String
        },
        cvv: {
          type: String
        },
        validdate: {
          type: String
        },
        balance:{
          type: Number,
          default: 0
        },
        blocked:{
          type: Boolean,
          default: false
        }

    }
)



var User = mongoose.model("user", userSchema);

module.exports = User;
