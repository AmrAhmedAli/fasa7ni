var LocalStrategy = require('passport-local').Strategy;
var User = require('./app/models/User');
var ServiceProvider= require('./app/models/ServiceProvider');
var Admin = require('./app/models/Admin');
var validator = require('validator');

module.exports = function(passport) {
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
           done(err, user);
        });
    });

    passport.use('local-signup', new LocalStrategy({

            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true
        },
        function(req, email, password, done) {
            //
            process.nextTick(function() {

              User.findOne({'email': email}, function(err, user){
                if (err){
                  req.flash('Opps! Something went wrong!');
                  return done(err);
                }
                if (user) {
                  req.flash('mess', 'That email has been already used.');
                //  res.send('That email has been already used.')
                  return done('That email has been already used.');
                }
                if (!validator.isEmail(req.body.email)){
                  req.flash('mess', 'Make sure you entered a correct email.');
                  //res.send()
                  return done('Make sure you entered a correct email.')
                }

                if (!(req.body.password===req.body.confirmedPassword)){
                  req.flash('mess', 'Passwords do not match!');
                  return done('Passwords do not match!');
                }

                if (req.body.contact==='Phone'){
                  if (!validator.isNumeric(req.body.phonenumber)){
                     req.flash('mess', 'Make sure you entered a valid phone number');
                     return done('Make sure you entered a valid phone number');
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
                          return done(err);

                        }

                        else {
                          req.flash ('mess', 'Welcome to Fasa7ni!');
                          console.log(newUser);
                          return done('Welcome to Fasa7ni!');
                        }
                    });


            });
            });

        }));

        passport.use('local-login', new LocalStrategy({

                usernameField : 'email',
                passwordField : 'password',
                passReqToCallback : true
            },
            function(req, email, password, done) {
              User.findOne({ 'email' :  email }, function(err, user) {

                    if (err)
                        return done(err);
                    if (user){
                      if (!(user.validPassword(password)))
                        return done('Oops! Wrong password.');
                      return done(null,user);
                      }
                });


            Admin.findOne({ 'email' :  email }, function(err, admin) {
                   console.log('In Admin');
                     if (err)
                         return done(err);
                     if (admin){
                       if (!admin.validPassword(password))
                         return done('Oops! Wrong password.');
                        return done(null,admin);
                       }
                       console.log('No Admin Found!');
                 });
              ServiceProvider.findOne({ 'email' :  email }, function(err, sP) {
                   console.log('In ServiceProvider');
                     if (err)
                         return done(err);
                     if (sP){
                         return done(null,sP);
                       }
                       console.log('No SP');
                 });

              ///return done('User not found');


            }));
}
