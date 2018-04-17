const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const project_name = 'ParDat'
module.exports = {
  entry: {
    entry: ['babel-polyfill', './app/index.js']
  },
  module: {
    rules: [
      { 
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets:[ 'es2015', 'react', 'stage-2' ]
        }, 
        exclude: /node_modules/ 
      },
      { 
        test: /\.css$/, 
        loader: 'style-loader!css-loader'
      },
      { 
        test: /\.scss$/, 
        use: [
          {loader: 'style-loader'}, 
          {loader: 'css-loader'}, 
          {
            loader: 'sass-loader', 
            options: {
              includePaths: ['/app/src/assets/scss', 'absolute/path/b']
            }
          }
        ]
      },
      { 
        test: /\.(png|jpg|gif)$/, 
        use: [
          {loader: 'file-loader'}
        ]
      },
      { test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [{loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
            publicPath: '../'
          }
        }]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
      disable: process.env.NODE_ENV === 'development'
    }),
    new HtmlWebpackPlugin({
      title: `${project_name} - Dev`,
      template: './app/index.html',
      favicon: './app/src/assets/img/favicon.png',
      filename: 'index.html',
      inject: 'body'
    })
  ],

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
}