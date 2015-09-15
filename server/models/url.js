// Models a URL.

'use strict';

let mongoose = require('mongoose');

let Url = mongoose.model('Url', {
  shortUrl: {
    type: String,
    required: true
  },
  longUrl: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = Url;
