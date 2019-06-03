const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/app',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: "app"
  },
  module: {
    rules: [
        {
            test: /\.(css|sass|scss)$/,
            loaders: ExtractTextPlugin.extract('css-loader!sass-loader' )
        }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};