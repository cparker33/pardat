const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const WebpackShellPlugin = require('webpack-shell-plugin')

module.exports = merge(common, {

  devServer: {
    historyApiFallback: true,
    port: 3300
  },

  devtool: 'cheap-module-eval-source-map',

  plugins: [
    new WebpackShellPlugin({
      onBuildStart: ['echo \x1B[01;93m  ParDat v3.0.2 \x1B[0m'],
      onBuildEnd: ['npm run lint']
    })
  ],
})