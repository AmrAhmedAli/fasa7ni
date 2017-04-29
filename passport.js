var LocalStrategy = require('passport-local').Strategy; // get local strategy
var User = require('./app/models/User'); // get user model
var ServiceProvider= require('./app/models/ServiceProvider'); // get serviceprovider model
var Admin = require('./app/models/Admin'); // get admin model
var validator = require('validator'); // validator module to validate string inputs

module.exports = function(passport) {
    // save user in the session
    passport.serializeUser(function(user, done) {
        done(null, user.id); // save user is only so that less information is stored in the session.
    });

    // get user from session
    passport.deserializeUser(function(id, done) {
      // look in usr table
        User.findById(id, function(err, user) {
          // if user is found return into the session
            	if(user){
                  done(err, user);
            	}
            });
        //look in admin table
      	Admin.findById(id, function(err, admin) {
          // if user is found in admin return into the session
          		if(admin){
                 done(err, admin);
    	          }
              });
        // look in serviceprovider table
      	ServiceProvider.findById(id, function(err, sP) {
          //if user is in serviceprovider return into the session
            	if(sP){
                   done(err, sP);
      	         }
              });
    });

    // create local sign up strategy -- this is only for the user

    passport.use('local-signup', new LocalStrategy({

            usernameField : 'email', // overwrite usernameField with email
            passwordField : 'password', // name of our password field
            passReqToCallback : true
        },
        //takes in the request, the email, password , done is the call back function
        function(req, email, password, done) {
            process.nextTick(function() {

              User.findOne({'email': email}, function(err, user){ // check if user exists
                if (err){
                  req.flash('Opps! Something went wrong!'); // if an error occured send error message
                  return done(err);
                }
                if (user) { // if user exists send error message
                  req.flash('mess', 'That email has been already used.'); // flash message
                  return done(null, false, req.flash('mess')); // return callback function with false and the flash message
                }
                if (!validator.isEmail(req.body.email)){ // if the format is not an email
                  req.flash('mess', 'Make sure you entered a correct email.');
                  return done(null, false,req.flash('mess'));
                }

                if (!(req.body.password===req.body.confirmedPassword)){ // if the passwords don't match
                  req.flash('mess', 'Passwords do not match!');
                  return done(null, false,req.flash('mess'));
                }

                if (req.body.contact==='Phone'){ // if a the way of contact is phone  check that we have a phone number
                  if (!validator.isNumeric(req.body.phonenumber)){ //check the field is numeric
                     req.flash('mess', 'Make sure you entered a valid phone number');
                       return done(null, false,req.flash('mess'));
                   }
                }
                  // if no errors

                    var newUser  = new User();

                    // set the user's local credentials
                    newUser.name=req.body.name;
                    newUser.email=req.body.email;
                    newUser.password=newUser.generateHash(req.body.password);
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
                        if (err){
                          req.flash('mess', 'Oops! Something went wrong!');
                          return done(err);
                        }
                        else {
                           return done(null, newUser, req.flash('mess', 'Success')); // return user so that it can be serialized
                        }
                    });
              });
            });

        }));

        // local login strategy for the user

        passport.use('local-login-user', new LocalStrategy({
                usernameField : 'email', //overwrite usernameField with our email
                passwordField : 'password',
                passReqToCallback : true
            },
            function(req, email, password, done) {
                User.findOne({ 'email' :  email }, function(err, user) { // check if the user exists
                    if (err)
                        return done(err); // if error send err
                    if (!user){
                      req.flash ('mess', 'Incorrect Username'); // if user doesn't exist send error message
                      return done(null, false, req.flash('mess'));
                    }
                    if (!user.validPassword(password)){ // check if the password is valid
                      req.flash('mess','Incorrect password') // if not send error message
                      return done(null, false, req.flash('mess'));

                    }
                    if(user.blocked == true){ // check if user is blocked
                        req.flash('mess','Sorry you have been blocked from using our services. If you think this is a mistake, contact us'); // send message
                        return done(null, false, req.flash('mess'));
                    }

                    return done(null, user, req.flash('mess','Success')); // if Success send success message and user to be serialized
                });

            }));

            // local login strategy for admin

          passport.use('local-login-admin', new LocalStrategy({

                 usernameField : 'email', //overwrite username field with email
                 passwordField : 'password', // overwrite password
                 passReqToCallback : true
             },

             function(req, email, password, done) {
                 Admin.findOne({ 'email' :  email }, function(err, admin) { // check if admin exists
                     if (err) // error message if something went wrong
                         return done(err);
                     if (!admin){ // if admin does not exist send error message
                       req.flash ('mess', 'Incorrect Username'); // send error message
                       return done(null, false, req.flash('mess')); // send flash message and inform the callback function that there is no users to return
                     }
                     if (password != admin.password){ // if passwords do not match
                       req.flash('mess','Incorrect password') // send error message
                       return done(null, false, req.flash('mess')); // send flash message and inform the callback function that there is no users to return

                     }

                     return done(null, admin, req.flash('mess','Success')); // return admin to be serialized if no errors were encountered
                 });
              }));

             passport.use('local-login-provider', new LocalStrategy({

                 usernameField : 'email', //overwrite email
                 passwordField : 'password', // password
                 passReqToCallback : true
             },
             function(req, email, password, done) {
                 ServiceProvider.findOne({ 'email' :  email}, function(err, sP) { //find serviceprovider
                     if (err)
                         return done(err);
                     if (!sP){ // if not found
                       req.flash ('mess', 'Incorrect Username'); // send error message
                       return done(null, false, req.flash('mess'));
                     }
                     if (password != sP.password){ // if passwords do not match send error message
                       req.flash('mess','Incorrect password')
                       return done(null, false, req.flash('mess'));

                     }

                     return done(null, sP, req.flash('mess','Success')); // no errors encountered success , send sP to be serialized and login
                 });
          }));
}
