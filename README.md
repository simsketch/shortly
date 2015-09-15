# shortly

A URL shortener built using the MEAN stack.

## Getting Started

1. `$ npm install`
2. `$ npm start`

### Create a New Short URL

Send a `POST` request to `/url` with the `longUrl` parameter. The returned JSON object contains a `shortUrl` which, when visited, redirects the browser to the original long URL.

## LICENSE
[MIT](LICENSE)
