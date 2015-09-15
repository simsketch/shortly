// Models a URL.

'use strict';

let mongoose = require('mongoose');
let autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose);

let urlSchema = mongoose.Schema({
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
urlSchema.plugin(autoIncrement.plugin, 'Url');

let url = mongoose.model('Url', urlSchema);

module.exports = url;
