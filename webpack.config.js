const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'build.js',
      clean: true,
    },
    module: {
      rules: [
        { test: /\.s[ac]ss$/i, use: [ "style-loader", "css-loader", "sass-loader" ] },
        { test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'babel-loader' }
      ]
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 9000,
    },
    plugins:[
          new HtmlWebpackPlugin({
            title: 'Scss application',
            template: 'src/index.html'
          }),
          new CssExtractPlugin({
            // Options similar to the same options in webpackOptions.output both options are optional
            filename: '[name].css',
          }),
    ]
};
