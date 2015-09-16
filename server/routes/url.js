// Routes for URLs.

'use strict';

let express = require('express');
let baseConverter = require('base-converter');
let Url = require('../models/url');

const ALPHABET = 'abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789';

let router = express.Router();

// Find a long URL for the given short URL and redirects to it.
router.get('/:shortUrl', function(req, res) {
  Url.findOne({shortUrl: req.params.shortUrl}, function(error, url) {
    if (error) {
      res.send(404);
      return;
    }

    res.redirect(url.longUrl);
  });
});

// Saves a new short URL to the database.
router.post('/url', function(req, res) {
  // TODO(amitburst): Add URL, and other, validation.
  if (!req.body.longUrl) {
    res.send(400);
    return;
  }

  Url.nextCount(function(error, count) {
    if (error) {
      res.send(500);
      return;
    }

    let url = new Url({
      shortUrl: baseConverter.decToGeneric(count + 1, ALPHABET),
      longUrl: req.body.longUrl
    });

    url.save(function(error, url) {
      if (error) {
        res.send(500);
        return;
      }

      res.send(url);
    });
  });
});

module.exports = router;
