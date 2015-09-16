// Main server entry point.

'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let logger = require('morgan');
let mongoose = require('mongoose');
let config = require('./config');
let urlRouter = require('./routes/url');

let app = express();
app.use(bodyParser.json());
app.use(logger(config.logFormat));
app.use(express.static('public'));
app.use('/', urlRouter);

mongoose.connect(config.database);
let database = mongoose.connection;
database.once('open', function() {
  let server = app.listen(config.port, function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log('Server started at http://%s:%s.', host, port);
  });
});
