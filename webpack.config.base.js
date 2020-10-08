'use strict'
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main:path.resolve(__dirname,'./src/ts/main/index.tsx')
  },
  output: {
    path: path.resolve(__dirname,'./dist/'),
    filename: 'bundle.js',
  },
  resolve: {
    alias:{
      '@assets':path.resolve(__dirname,'./assets'),
      'main': path.resolve(__dirname, './src/ts/main')
    },
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules:[
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {  
            loader: 'ts-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.bmp$/i,
        use: [
          {
            loader: 'url-loader?name=[path][name].[ext]',
            options: {}  
          }
        ]
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname,'./assets/html/index.html'),
      inject: true
    }),
    new CopyWebpackPlugin({
      patterns:[
        {
          from:path.resolve(__dirname,'./assets/img'),
          to:path.resolve(__dirname,'./dist/assets/img')
        }
      ]
    })
  ]
}