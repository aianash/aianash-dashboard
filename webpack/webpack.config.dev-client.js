const path = require('path');
const webpack = require('webpack');
const styleLintPlugin = require('stylelint-webpack-plugin');
const assetsPath = path.join(__dirname, '..', 'public', 'assets');
const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var commonLoaders = [
  {
    /*
     * TC39 categorises proposals for babel in 4 stages
     * Read more http://babeljs.io/docs/usage/experimental/
     */
    test: /\.js$|\.jsx$/,
    loader: 'babel-loader',
    // Reason why we put this here instead of babelrc
    // https://github.com/gaearon/react-transform-hmr/issues/5#issuecomment-142313637
    query: {
      presets: ['react-hmre', 'es2015', 'react', 'stage-0'],
      plugins: ['transform-decorators-legacy']
    },
    include: path.join(__dirname, '..', 'app'),
    exclude: path.join(__dirname, '..', 'node_modules')
  },
  {
    test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
    loader: 'url',
    query: {
        name: '[hash].[ext]',
        limit: 10000,
    }
  },
  { test: /\.html$/, loader: 'html-loader' },
  { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
  { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
  { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
];

var postCSSConfig = function () {
  return [
    require('postcss-import')({
      path: path.join(__dirname, '..', 'app', 'css'),
      addDependencyTo: webpack // for hot-reloading
    }),
    // require('postcss-scss')(),
    require('postcss-cssnext')({
      browsers: ['> 1%', 'last 2 versions']
    }),
    require('postcss-reporter')({ clearMessages: true })
  ];
};

module.exports = {
    // eval - Each module is executed with eval and //@ sourceURL.
    devtool: 'eval',
    // The configuration for the client
    name: 'browser',
    cache: true,
    /* The entry point of the bundle
     * Entry points for multi page app could be more complex
     * A good example of entry points would be:
     * entry: {
     *   pageA: "./pageA",
     *   pageB: "./pageB",
     *   pageC: "./pageC",
     *   adminPageA: "./adminPageA",
     *   adminPageB: "./adminPageB",
     *   adminPageC: "./adminPageC"
     * }
     *
     * We can then proceed to optimize what are the common chunks
     * plugins: [
     *  new CommonsChunkPlugin("admin-commons.js", ["adminPageA", "adminPageB"]),
     *  new CommonsChunkPlugin("common.js", ["pageA", "pageB", "admin-commons.js"], 2),
     *  new CommonsChunkPlugin("c-commons.js", ["pageC", "adminPageC"]);
     * ]
     */
    context: path.join(__dirname, '..', 'app'),
    // Multiple entry with hot loader
    // https://github.com/glenjamin/webpack-hot-middleware/blob/master/example/webpack.config.multientry.js
    entry: {
      app: [
        hotMiddlewareScript,
        './client'
      ],
      // vendor: ['skrollr', 'd3']
    },
    output: {
      // The output directory as absolute path
      path: assetsPath,
      // The filename of the entry chunk as relative path inside the output.path directory
      filename: '[name].js',
      // The output path from the view of the Javascript
      publicPath: '/assets/'
    },
    module: {
      loaders: commonLoaders.concat([
        { test: /\.css$/,
          loaders: [
            'style',
            // 'css?module&localIdentName=[name]__[local]___[hash:base64:5]',
            'css?module&localIdentName=[local]',
            'postcss'
          ]
        },
        { test: /\.scss$/,
          loaders: [
            'style',
            // 'css?modules&importLoaders=2&localIdentName=[name]__[local]___[hash:base64:5]',
            'css?modules&importLoaders=2&localIdentName=[local]',
            'postcss',
            'sass'
          ]
        }
      ])
    },
    resolve: {
      root: [path.join(__dirname, '..', 'app')],
      extensions: ['', '.js', '.jsx', '.css', '.scss'],
      // alias: {
      //   skrollr: "lib/skrollr.min.js",
      //   d3: "lib/d3.v4.min.js"
      // }
    },
    // externals: {
    //   skrollr: 'skrollr'
    // },
    plugins: [
        // new webpack.ProvidePlugin({
        //   skrollr : "skrollr",
        //   d3 : "d3"
        // }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
          __DEVCLIENT__: true,
          __DEVSERVER__: false,
          __DEVELOPMENT__: true
        }),
        new styleLintPlugin({
          configFile: path.join(__dirname, '..', '.stylelintrc'),
          context: path.join(__dirname, '..', 'app'),
          files: '**/*.?(sa|sc|c)ss'
        }),
        // new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', Infinity)
    ],
    postcss: postCSSConfig
};
