const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    bundle: './src/index.js',
  },

  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })],

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  }
}