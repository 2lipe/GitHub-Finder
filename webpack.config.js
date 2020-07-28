const path = require('path');
const webpack = require('webpack');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'main.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  node: {
    fs: 'empty'
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src', 'index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.SourceMapDevToolPlugin({})
  ],
  devtool: false,
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/i,
        use: [
          'style.loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg|ttf|eot|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    ]
  }

};
