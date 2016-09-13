import Express from 'express';
import webpack from 'webpack';

import compression from 'compression';
import path from 'path';
import PrettyError from 'pretty-error';
import http from 'http';
import axios from 'axios';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';

const ENV = process.env.NODE_ENV || 'development';
const PORT = (process.env.PORT || 3000);
const HOST = (process.env.HOST || "localhost");

const AppServer = require('../public/assets/server');

const pretty = new PrettyError();
const app = Express();
const server = new http.Server(app);


if(ENV === 'production') {
  app.use(compression());
}

if(ENV === 'development') {
  const webpackDevConfig = require('../webpack/webpack.config.dev-client');
  const compiler = webpack(webpackDevConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackDevConfig.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());

if(ENV === 'production') {
  // app.use(Express.static(path.join(__dirname, '..', 'public'), { maxAge: '30 days'}));
  app.use(Express.static(path.join(__dirname, '..', 'public')));
} else {
  app.use(Express.static(path.join(__dirname, '..', 'public')));
}

app.get('*', AppServer.default);

server.listen(PORT, HOST, (err) => {
  if(err) {
    console.error(err);
    return;
  }
  console.info('==> 💻  Open in a browser to view the app.');
});