// Main server entry point.

'use strict';

let express = require('express');
let mongoose = require('mongoose');
let config = require('./config');

let app = express();

mongoose.connect(config.database);
let database = mongoose.connection;
database.once('open', function() {
  let server = app.listen(config.port, function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log('Server started at http://%s:%s.', host, port);
  });
});
