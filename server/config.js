// Server configuration.

'use strict';

let environment = 'development' || process.env.ENVIRONMENT;

let config = {
  development: {
    port: 3000,
    database: 'mongodb://localhost/test',
    logFormat: 'dev'
  },
  production: {
    port: process.env.PORT,
    database: process.env.DATABASE,
    logFormat: 'common'
  }
};

module.exports = config[environment];
