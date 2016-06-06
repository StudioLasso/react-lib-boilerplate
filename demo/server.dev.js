var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var webpack = require('webpack');
var config = require('./webpack.config.js');
var host = config.host || 'localhost';
var port = Number(process.env.PORT) || 8080;
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, { // Start a server
  publicPath: config.output.publicPath,
  hot: true, // With hot reloading
  inline: false,
  historyApiFallback: false,
  quiet: false,
  stats: {colors: true},
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  headers: {'Access-Control-Allow-Origin': '*'}
}));

app.use(require('webpack-hot-middleware')(compiler));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, function onAppListening(err) {
  if (err) {
    console.error(err);
  } else {
    console.info('==> 🚧  Webpack development server listening on port %s', port);
  }
});
