var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
var dbConnection = require('./config/db');
var config = require('./config/config');
var http = require('http')

var app = express();

app.use(cors());

app.use(bodyParser.json({ limit: '200mb' }));
app.use(bodyParser.urlencoded({ limit: '200mb', extended: true }));


// Main routes
app.use(express.static(path.join(__dirname, 'build/')));
require('./routes')(app);
const hostname = config.HOST;
const port = config.PORT;

app.listen(port, hostname, (req, resp) => {
    console.log(`Server running at http://${hostname}:${port}/`);
})


module.exports = app;