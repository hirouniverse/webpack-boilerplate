'use strict';

const path = require('path');
const webpack = require('webpack');
const WebpackBaseConfig = require('./Base');

class WebpackDevConfig extends WebpackBaseConfig {
  constructor() {
    super();
    this.config = {
      // Set extra webpack configuration like;
      devtool: '',
      devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3000,
      },
      entry: '',
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
      ],
    };
  }
}
module.exports = WebpackDevConfig;