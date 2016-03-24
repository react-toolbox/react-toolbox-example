const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
const nodeDebug = process.env.NODE_DEBUG || false;
const isProd = nodeEnv === 'production';
const isDev = nodeEnv === 'development';
const srcPath = path.join(__dirname, 'src');

const plugins = [
  new ExtractTextPlugin('bundle.css', {allChunks: true}),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env': {NODE_ENV: JSON.stringify(nodeEnv), NODE_DEBUG: JSON.stringify(nodeDebug)},
    __DEV__: isDev
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor.bundle.js',
    minChunks: Infinity
  })
];

switch (nodeEnv) {
  case 'production':
    plugins.push(new webpack.optimize.DedupePlugin());
    plugins.push(new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: true
    }));
    break;
  case 'development':
  case 'test':
    plugins.push(new webpack.HotModuleReplacementPlugin());
    plugins.push(new webpack.NoErrorsPlugin());
    break;
  default:
    break;
}

module.exports = {
  debug: nodeDebug,
  devtool: isProd ? 'source-map' : 'cheap-module-eval-source-map',
  noInfo: nodeEnv === 'test',
  entry: {
    bundle: srcPath,
    vendor: ['react', 'react-dom', 'classnames', 'webpack-hot-middleware/client?quiet=false', 'babel-preset-react-hmre']
  },
  output: {
    path: path.join(__dirname, isProd ? 'build' : '.tmp'),
    pathinfo: true,
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.scss', '.js', '.jsx', '.json'],
    root: srcPath
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: srcPath,
        loaders: ['babel']
      }, {
        test: /(\.scss|\.css)$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap!toolbox')
      }
    ]
  },
  toolbox: {
    theme: path.join(srcPath, 'styles', 'theme.scss')
  },
  postcss: [autoprefixer],
  plugins
};
