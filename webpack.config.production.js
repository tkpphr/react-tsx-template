'use strict'
const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');
const { merge } = require('webpack-merge');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(baseConfig,{
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      sourceMap: false,
      terserOptions: {
        ecma: 6,
        compress: true,
        output: {
          comments: false,
          beautify: false
        }
      }
    })]
  },
});