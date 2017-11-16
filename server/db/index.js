const Sequelize = require('sequelize');
const config = require('../config').db;
const bcrypt = require('bcrypt-nodejs');

let db = {};

const init = () => {
    db = new Sequelize(config.name, config.user, config.password, config.options);

    db.authenticate()
        .then(() => {
            console.log(`Connection to ${config.name} has been established successfully.`);
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });

    const User = db.define('User', {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        hash: { type: Sequelize.STRING, allowNull: true },
        email: { type: Sequelize.STRING, allowNull: true },
        name: { type: Sequelize.STRING, allowNull: true },
        password: { type: Sequelize.STRING, allowNull: true },
        salt: { type: Sequelize.STRING, allowNull: true },
        birthDate: { type: Sequelize.DATE, allowNull: true },
        googleToken: { type: Sequelize.STRING, allowNull: true },
        googleid: { type: Sequelize.STRING, allowNull: true },
        vkToken: { type: Sequelize.STRING, allowNull: true },
        vkid: { type: Sequelize.STRING, allowNull: true },
        avatar: { type: Sequelize.STRING, allowNull: true },
        activated: { type: Sequelize.BOOLEAN, defaultValue: false }
    });

    User.generateHash = function(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    };

    // checking if password is valid
    User.validPassword = function(password) {
        return bcrypt.compareSync(password, this.googlePassword);
    };

    db.sync();
};

module.exports = {
    instance: () => db,
    init
};