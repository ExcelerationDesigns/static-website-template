var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: './src/scripts/app.js',
    output: {
      path: path.join(__dirname, './dist'),
      filename: 'app.js'
    },
    module: {
      rules: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.html$/,
        loader: 'html-loader',
        query: {
          interpolate: true
        }
      }, {
        test  : /\.ico|\.png|\.jpg$/,
        loader: 'file-loader',
        query : {
          name: '[name].[ext]',
        },
      },
    ]},
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html',
        inject: true
      }),
      new HtmlWebpackPlugin({
        filename: 'about.html',
        template: './src/about.html',
        inject: true
      }),

    ]
};
