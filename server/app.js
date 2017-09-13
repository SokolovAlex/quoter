const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const config = require('./config.json');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/../dist'));

const api = require('./api/quotes');

app.use('/api/quotes', api(app));

app.use('/', (req, res, next) => {
    return res.sendFile(path.resolve(__dirname + '/../dist/index.html'));
});

const port = config.port;
app.listen(port, () => {
    console.log(`Quorter api starting on port ${port}!`);
});