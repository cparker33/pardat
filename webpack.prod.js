const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const common = require('./webpack.common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  plugins: [
    new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      template: './app/index.html',
      title: 'ParDat - Production',
      favicon: './app/src/assets/img/favicon.png',
      filename: 'index.html',
      inject: 'body'
    })
  ]
})