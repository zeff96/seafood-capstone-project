const path = require ('path');
const common = require('./webpack.common');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {merge} = require('webpack-merge');

module.exports = merge(common, {
  mode: "production",

  plugins: [new MiniCssExtractPlugin()],
  
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  }
});