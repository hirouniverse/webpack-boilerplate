'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
});

class WebpackBaseConfig {

  constructor() {
    this._config = {};
  }

  get config() {
    return this._config;
  }

  set config(data) {
    this._config = Object.assign({}, this.defaultConfig, data);
    return this._config;
  }

  get srcAbsolutePath() {
    return path.resolve('./src');
  }

  get testAbsolutePath() {
    return path.resolve('./test');
  }

  get defaultConfig() {
    return {
      // TODO: Write webpack configuration
      context: this.srcAbsolutePath,
      entry: './index.js',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
      },
      resolve: {
        alias: {
          '@': this.srcAbsolutePath,
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
            use: {loader: 'babel-loader',}
          },
        ]
      },
      plugins: [htmlWebpackPlugin],
    };
  }
}
module.exports = WebpackBaseConfig;