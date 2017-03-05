var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: './src/scripts/app.js',
    output: {
      path: path.join(__dirname, './dist'),
      filename: 'app.js'
    },
    module: {
      loaders: [
        { test: /\.css$/, loader: 'style-loader!css-loader'},

      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/templates/layout.html',
        inject: true
      }),
      new HtmlWebpackPlugin({
        filename: 'about.html',
        template: './src/templates/layout.html',
        inject: true
      }),

    ]
};
