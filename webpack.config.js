const webpack = require('webpack');

module.exports = {
  entry: {
    main:'./src/ts/main/index.tsx'
  },
  devtool: 'inline-source-map',
  output: {
    path: __dirname+'/dist/',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devServer: {
    contentBase: './dist',
    port: 3535,
    
  },
  module: {
    rules:[
      {
        test: /\.tsx?$/,
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
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}