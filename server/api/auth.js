const passport = require('passport');

module.exports = (app) => {
    const redirects = {
        successRedirect: '/',
        failureRedirect: '/'
    };

    const redirectFunction = (req, res) => {
        res.redirect('/');
    };

    // GET /auth/google
    //   Use passport.authenticate() as route middleware to authenticate the
    //   request.  The first step in Google authentication will involve
    //   redirecting the user to google.com.  After authorization, Google
    //   will redirect the user back to this application at /auth/google/callback
    app.get('/auth/google', passport.authenticate('google', { scope: ['openid email profile'] }));

    // GET /auth/google/callback
    //   Use passport.authenticate() as route middleware to authenticate the
    //   request.  If authentication fails, the user will be redirected back to the
    //   login page.  Otherwise, the primary route function function will be called,
    //   which, in this example, will redirect the user to the home page.
    app.get('/auth/google/callback',
        passport.authenticate('google', redirects),
        redirectFunction
    );


    //This function will pass callback, scope and request new token
    app.get('/auth/vkontakte', passport.authenticate('vkontakte'));

    app.get('/auth/vkontakte/callback',
        passport.authenticate('vkontakte', redirects),
        redirectFunction
    );

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
}