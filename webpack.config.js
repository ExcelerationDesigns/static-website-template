var path = require('path');

module.exports = {

    entry: {
        main: './index.html'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].html'
    },
    module: {
        loaders: [
            { test: /\.html$/,
              use: [ 'html-loader' ]
            }
        ]
    }
};
