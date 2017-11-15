const pgtools = require('pgtools');
const config = require('../server/config').db;

const createConfig = {
    user: config.user,
    password: config.password,
    port: config.port,
    host: config.options.host
}

pgtools.createdb(createConfig, config.name);