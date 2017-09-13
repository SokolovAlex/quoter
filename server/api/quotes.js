const express = require('express');
const router = express.Router();
const _ = require('lodash');

module.exports = app => {

    router.get('/', (req, res) => {
        return res.json({ success: true, quotes: [] });
    });

    return router;
};