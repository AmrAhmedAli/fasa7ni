var LocalStrategy = require('passport-local').Strategy;
var User = require('./app/models/User');
var ServiceProvider= require('./app/models/ServiceProvider');
var Admin = require('./app/models/Admin');

module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });


    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
           done(err, user);
        });
    });
    passport.use('local-login', new LocalStrategy({

            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true
        },
        function(req, email, password, done) {

            User.findOne({ 'email' :  email }, function(err, user) {
                if (err)
                    return done(err);
                if (!user){
                  Admin.findOne({ 'email' : email }, function(err, admin) {
                    if (err)
                      return done(err);
                    if (!admin){
                      ServiceProvider.findOne({ 'email' : email }, function(err, serviceProvider) {
                        if (err)
                          return done(err);
                        if (!serviceProvider)
                          return done(null, false, req.flash('loginMessage', 'No user found.'));
                        if (!serviceProvider.validPassword(password))
                          return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
                        return done(null, user);
                      });
                    }
                    if (!admin.validPassword(password))
                      return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
                    return done(null,user);
                  });
                }
                if (!user.validPassword(password))
                    return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
                return done(null, user);
            });

        }));
      }
