const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
});

module.exports = {
  entry: path.resolve('./src'),
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join('./dist'),
    compress: true,
    port: 3000,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve('./src'),
      // TODO: config
      // 'config': `${path.resolve('./src')}/config/`,
    },
    modules: [
      'node_modules',
      'bower_components',
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ]
  },
  plugins: [
    htmlWebpackPlugin,
    new webpack.HotModuleReplacementPlugin(),
  ],
};