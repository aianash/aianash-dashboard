var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var InlineEnviromentVariablesPlugin = require('inline-environment-variables-webpack-plugin');
var ImageminPlugin = require('imagemin-webpack-plugin').default;

var webpack = require('webpack');

var assetsPath = path.join(__dirname, '..', 'public', 'assets');
var publicPath = '/assets/';

const extractScss = new ExtractTextPlugin('styles/main.css');

var commonLoaders = [
  {
    test: /\.js$|\.jsx$/,
    loader: 'babel-loader',
    query: {
      presets: ['es2015', 'react', 'stage-0'],
      plugins: [
        'transform-decorators-legacy',
        'transform-react-remove-prop-types',
        'transform-react-constant-elements',
        'transform-react-inline-elements'
      ]
    },
    include: path.join(__dirname, '..', 'app'),
    exclude: path.join(__dirname, '..', 'node_modules')
  },
  { test: /\.json$/, loader: 'json-loader' },
  {
    test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
    loader: 'url',
    query: {
        name: '[hash].[ext]',
        limit: 10000,
    }
  },
  {
    test: /\.scss$/i,
    loader: ExtractTextPlugin.extract('css-loader!postcss-loader!sass-loader')
  }
];

var postCSSConfig = function () {
  return [
    require('postcss-import')(),
    require('postcss-cssnext')({
      browsers: ['> 1%', 'last 2 versions']
    }),
    require('postcss-reporter')({ clearMessages: true })
  ];
};

module.exports = [
  {
    // The configuration for the client
    name: 'browser',
    context: path.join(__dirname, '..', 'app'),
    devtool: 'cheap-module-source-map',
    entry: {
      app: './client'
    },
    output: {
      path: assetsPath,
      filename: '[name].js',
      publicPath: publicPath // The output path from the view of the Javascript
    },
    module: {
      loaders: commonLoaders
    },
    resolve: {
      root: [path.join(__dirname, '..', 'app')],
      extensions: ['', '.js', '.jsx', '.css', '.scss']
    },
    plugins: [
        // new webpack.optimize.OccurenceOrderPlugin(),
        // extractScss,
        // extract inline css from modules into separate files
        new ExtractTextPlugin('styles/main.css', { allChunks: true }),
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: '"production"'
          },

          __CLIENT__: true,
          __SERVER__: true,
          __DEVELOPMENT__: false,
          __DEVTOOLS__: false,
          // to remove following
          __DEVCLIENT__: false,
          __DEVSERVER__: false
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
          compressor: {
            warnings: false
          }
        }),
        new InlineEnviromentVariablesPlugin({ NODE_ENV: 'production' })
    ],
    postcss: postCSSConfig
  },
  {
    // The configuration for the server-side rendering
    name: 'server-side rendering',
    context: path.join(__dirname, '..', 'app'),
    entry: {
      server: './server'
    },
    target: 'node',
    output: {
      path: assetsPath,
      filename: 'server.js',
      publicPath: publicPath, // The output path from the view of the Javascript
      libraryTarget: 'commonjs2'
    },
    module: {
      loaders: commonLoaders
    },
    resolve: {
      root: [path.join(__dirname, '..', 'app')],
      extensions: ['', '.js', '.jsx', '.css', '.scss']
    },
    plugins: [
      // new webpack.optimize.OccurenceOrderPlugin(),
      // extractScss,
      new ExtractTextPlugin('styles/main.css', { allChunks: true }),
      new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: '"production"'
          },

          __CLIENT__: true,
          __SERVER__: true,
          __DEVELOPMENT__: false,
          __DEVTOOLS__: false,
          // to remove following
          __DEVCLIENT__: false,
          __DEVSERVER__: false
      }),
      new webpack.IgnorePlugin(/vertx/),

      // optimizations
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false
        }
      }),
      // Make sure that the plugin is after any plugins that add images
      // These are the default options:
      new ImageminPlugin({
        disable: false,
        optipng: {
          optimizationLevel: 3
        },
        gifsicle: {
          optimizationLevel: 1
        },
        jpegtran: {
          progressive: false
        },
        svgo: {
        },
        pngquant: null, // pngquant is not run unless you pass options here
        plugins: []
      }),
      new InlineEnviromentVariablesPlugin({ NODE_ENV: 'production' })
    ],
    postcss: postCSSConfig
  }
];