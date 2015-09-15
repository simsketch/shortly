// Main server entry point.

'use strict';

let express = require('express');

let app = express();

let server = app.listen(3000, function() {
  let host = server.address().address;
  let port = server.address().port;
  console.log('Server started at http://%s:%s.', host, port);
});
