
var mongoose=require ('mongoose');
var bcrypt   = require('bcrypt-nodejs');


//Create the MovieSchema.
//Properties and what type of Properties

var userSchema=new mongoose.Schema({

name : {
    type:String ,
    required:true 

},

email : {
    type:String ,
    required:true
},
password : {
    type:String ,
    required:true 

},


birthdate : {
    type:String ,
    required:true 

}
,
gender : {
    type:String ,
    required:true
},

homelocation : {
    type:String ,
    required:true
},

phonenumber : {
    type:Number ,
    required:true
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


});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

var User= mongoose.model("user",userSchema);

module.exports=User ; 


























/*

email
password
name
birthdate 
gender
phonenumber
homelocation
wayofcontact




table for rating 

email unique 








Booking 
user-email
payment method 
status 
place_name
date
time
amount-paid
room-name






*/


/*








var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

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
          type: String,
          required: true
        },

        gender :{
          type: String,
        },
        homelocation:{
          type: String
        },
       

      
       
    

    }
)

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

var User = mongoose.model("user", userSchema);

module.exports = User;















*/




























