const path = require('path');
const webpack = require('webpack');

const config = {
    entry: {
        calendar: './calendar/index.js'
    },
    output: {
        path: __dirname + "/build",
        filename: "[name].min.js"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new webpack.optimize.CommonsChunkPlugin('vendor')
    ],
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['env']
              }
            }
          },
          {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
          }
        ]
      }
};

module.exports = config;
