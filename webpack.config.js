var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader']
        })
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        query: {
          interpolate: true
        }
      },
      {
        test  : /\.ico|\.png|\.gif|\.jpg$/,
        loader: 'file-loader',
        query : {
          name: 'img/[name].[ext]',
        },
      },
      {
        test  : /^src\/vendor\/.+?\.js$/,
        loader: 'file-loader'
      }
    ]},
    plugins: [
      new CopyWebpackPlugin([{
        from: 'src/vendor',
        to: 'vendor'
      }]),
      new ExtractTextPlugin('style.css'),
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
