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
	if(user){
           done(err, user);
	}
        });
	Admin.findById(id, function(err, admin) {
		if(admin){
           done(err, admin);
	}
        });
	ServiceProvider.findById(id, function(err, sP) {
	if(sP){
           done(err, sP);
	}
        });
    });

    passport.use('local-signup', new LocalStrategy({

            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true
        },
        function(req, email, password, done) {
            process.nextTick(function() {

              User.findOne({'email': email}, function(err, user){
                if (err){
                  req.flash('Opps! Something went wrong!');
                  return done(err);
                }
                if (user) {
                  req.flash('mess', 'That email has been already used.');
                  return done(null, false, req.flash('mess'));
                }
                if (!validator.isEmail(req.body.email)){
                  req.flash('mess', 'Make sure you entered a correct email.');
                  return done(null, false,req.flash('mess'));
                }

                if (!(req.body.password===req.body.confirmedPassword)){
                  req.flash('mess', 'Passwords do not match!');
                  return done(null, false,req.flash('mess'));
                }

                if (req.body.contact==='Phone'){
                  if (!validator.isNumeric(req.body.phonenumber)){
                     req.flash('mess', 'Make sure you entered a valid phone number');
                       return done(null, false,req.flash('mess'));
                   }
                }

                    var newUser  = new User();
                    console.log('Setting user credentials');

                    console.log(req.body);

                    // set the user's local credentials
                    newUser.name=req.body.name;
                    newUser.email=req.body.email;
                    newUser.password=newUser.generateHash(req.body.password);
                    //ewUser.birthdate= req.body.birthdate;
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


                           return done(null, newUser, req.flash('mess', 'Success'));
                        }
                    });


            });
            });

        }));

        passport.use('local-login-user', new LocalStrategy({
                usernameField : 'email',
                passwordField : 'password',
                passReqToCallback : true
            },
            function(req, email, password, done) {
                User.findOne({ 'email' :  email }, function(err, user) {
                    if (err)
                        return done(err);
                    if (!user){
                      req.flash ('mess', 'Incorrect Username');
                      return done(null, false, req.flash('mess'));
                    }
                    if (!user.validPassword(password)){
                      req.flash('mess','Incorrect password')
                      return done(null, false, req.flash('mess'));

                    }
                    if(user.blocked == true){
                        req.flash('mess','Sorry you have been blocked from using our services. If you think this is a mistake, contact us');
                        return done(null, false, req.flash('mess'));
                    }

                    return done(null, user, req.flash('mess','Success'));
                });

            }));

          passport.use('local-login-admin', new LocalStrategy({

                 usernameField : 'email',
                 passwordField : 'password',
                 passReqToCallback : true
             },

             function(req, email, password, done) {
                 Admin.findOne({ 'email' :  email }, function(err, admin) {
                     if (err)
                         return done(err);
                     if (!admin){
                       req.flash ('mess', 'Incorrect Username');
                       return done(null, false, req.flash('mess'));
                     }
                     if (password != admin.password){
                       req.flash('mess','Incorrect password')
                       return done(null, false, req.flash('mess'));

                     }

                     return done(null, admin, req.flash('mess','Success'));
                 });
              }));

             passport.use('local-login-provider', new LocalStrategy({

                 usernameField : 'email',
                 passwordField : 'password',
                 passReqToCallback : true
             },
             function(req, email, password, done) {
                 ServiceProvider.findOne({ 'email' :  email}, function(err, sP) {
                     if (err)
                         return done(err);
                     if (!sP){
                       req.flash ('mess', 'Incorrect Username');
                       return done(null, false, req.flash('mess'));
                     }
                     if (password != sP.password){
                       req.flash('mess','Incorrect password')
                       return done(null, false, req.flash('mess'));

                     }

                     return done(null, sP, req.flash('mess','Success'));
                 });
          }));
}
