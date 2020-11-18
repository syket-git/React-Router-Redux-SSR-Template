const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

const config = {
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false",
    }),
  ],

  externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);
