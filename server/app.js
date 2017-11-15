const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const session = require('express-session');

const boot = require('./boot');
const config = require('./config.json');
const api = require('./api/quotes');
const auth = require('./api/auth');
const app = express();

app.set('view engine', 'pug');
app.set('views', './public/views')

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: 'SECRET' }));
app.use(express.static(__dirname + '/../public'));

app.use(passport.initialize());
app.use(passport.session());

boot(app, passport);

auth(app)

app.use('/api/quotes', api(app));

app.use('/', (req, res, next) => {
    return res.render('main', { user: req.isAuthenticated() ? req.user : null });
});

const port = config.port;
app.listen(port, () => {
    console.log(`Quorter api starting on port ${port}!`);
});