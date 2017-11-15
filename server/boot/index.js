const db = require('../db');
const passportInit = require('./passport-init');

module.exports = (app) => {
    db.init();
    passportInit(app);
};