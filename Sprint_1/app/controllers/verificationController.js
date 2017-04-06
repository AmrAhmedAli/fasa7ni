var Admin = require('../models/Admin');
var ServiceProvider  = require('../models/ServiceProvider');
var User= require('../models/User');
var validator = require('validator');


var verificationController = {

  index: function(req, res){


    res.render('index'); //virtual page names
  },

  signUp: function(req,res){
    res.render('signUp'); // virtual page names
  },

  signIn: function(req,res){
    res.render('signIn'); //virtual page names
  },

  userSignUp: function(req,res){
    User.findOne({ 'email' :  req.body.email }, function(err, user) {

          if (err){
            req.flash('mess', 'Opps! Something went wrong!');
            return res.send('Opps! Something went wrong!');
          }
          if (user) {
            req.flash('mess', 'That email has been already used.');
          //  res.send('That email has been already used.')
            return res.send('That email has been already used.');
          }
          if (!validator.isEmail(req.body.email)){
            req.flash('mess', 'Make sure you entered a correct email.');
            //res.send()
            return res.send('Make sure you entered a correct email.')
          }

          if (!(req.body.password===req.body.confirmedPassword)){
            req.flash('mess', 'Passwords do not match!');
            return res.send('Passwords do not match!');
          }

          if (req.body.contact==='Phone'){
            if (!validator.isNumeric(req.body.phonenumber)){
               req.flash('mess', 'Make sure you entered a valid phone number');
               return res.send('Make sure you entered a valid phone number');
             }
          }

              var newUser  = new User();
              console.log('Setting user credentials');

              // set the user's local credentials
              newUser.name=req.body.name;
              newUser.email=req.body.email;
              newUser.password=newUser.generateHash(req.body.password);
              newUser.birthdate= new Date(req.body.birthdate);
              newUser.contact= req.body.contact;
              newUser.phoneNumber= req.body.phoneNumber;
              newUser.gender=req.body.gender;
              newUser.homelocation=req.body.homelocation;
              newUser.cardNumber= req.body.cardNumber;
              newUser.holderName= req.body.holderName;
              newUser.cvv= req.body.cvv;
              newUser.validdate=req.body.validdate;

              // save the user
              newUser.save(function(err) {
                console.log('Saving User');
                  if (err){
                    console.log('Error! Occured');

                    req.flash('mess', 'Oops! Something went wrong!');
                    return res.send(err);

                  }

                  else {
                    req.flash ('mess', 'Welcome to Fasa7ni!');
                    console.log(newUser);
                    return res.send('Welcome to Fasa7ni!');
                  }
              });


      });
  },

  signOut: function(req, res){
      req.logout();
      res.redirect('/');
  }

}

module.exports = verificationController;
