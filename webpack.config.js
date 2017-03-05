var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: './src/app.js',
    output: {
      path: path.join(__dirname, './dist'),
      filename: '[name].html'
    },
    module: {
      loaders: [
        { test: /\.css$/, loader: 'style-loader!css-loader'},

      ]
    },
    plugins: [new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: true
    })]
};
