const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const VKontakteStrategy = require('passport-vkontakte').Strategy;
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

    passport.use(new VKontakteStrategy(
        config.auth.vk,
        function(accessToken, refreshToken, profile, next) {
            User.findOne({ where: { vkid: new String(profile.id) } })
                .then((user) => {
                    if (user) {
                        return next(null, user.dataValues);
                    }
                    User.create({
                            vkid: profile.id,
                            email: profile.email || '',
                            name: profile.displayName,
                            vkToken: accessToken,
                            avatar: profile.photos[0].value
                        })
                        .then((result) => next(null, result))
                        .catch(next);
                })
                .catch(next);
        }
    ));

    passport.use(new GoogleStrategy(

        config.auth.google,

        function(accessToken, refreshToken, profile, done) {
            User.findOne({ where: { googleid: profile.id } })
                .then((user) => {
                    if (user) {
                        return done(null, user.dataValues);
                    }
                    User.create({
                            googleid: profile.id,
                            email: profile.emails[0].value,
                            name: profile.displayName,
                            googleToken: accessToken,
                            avatar: profile.photos[0].value
                        })
                        .then((result) => done(null, result))
                        .catch(done);
                });
        }));
};