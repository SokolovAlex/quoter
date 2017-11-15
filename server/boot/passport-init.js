const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const config = require('../config');
const db = require('../db');

module.exports = (app) => {

    const dbInstance = db.instance();
    const User = dbInstance.models.User;

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id).then(user => {
            done(null, user)
        });
    });

    passport.use(new GoogleStrategy(

        config.auth.google,

        function(accessToken, refreshToken, profile, done) {
            User.findOne({ where: { googleid: profile.id } }).then(function(user) {
                if (user) {
                    return done(null, user.dataValues);
                } else {
                    User.create({
                        googleid: profile.id,
                        email: profile.emails[0].value,
                        name: profile.displayName,
                        googleToken: accessToken,
                        avatar: profile.photos[0].value
                    }, (err, result) => {
                        if (err) done(err);
                        return done(null, result);
                    });
                }
            });
        }));
};