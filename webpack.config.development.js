'use strict'
const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');
const { merge } = require('webpack-merge');
const path = require('path');

module.exports = merge(baseConfig,{
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    clientLogLevel: 'debug',
    contentBase: path.resolve(__dirname,'./dist'),
    watchContentBase: true,
    openPage: 'index.html',
    port: 3535,
    host: 'localhost',
    hot: true,
    compress: true,
    overlay: { warnings: false, errors: true },
    publicPath: '/',
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ]
});



