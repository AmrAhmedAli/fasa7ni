var mongoose=require ('mongoose');

var RatingSchema=new mongoose.Schema({

email : {
    type:String ,
    required:true
},

rate : {
    type:Number ,
    required:true,
    min:1,
    max:5

},

place:{
    type:String,
    required:true

}

})
var Rating= mongoose.model("rating",RatingSchema);
module.exports=Rating; 


























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





























