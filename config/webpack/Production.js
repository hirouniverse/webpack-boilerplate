'use strict';

const webpack = require('webpack');
const WebpackBaseConfig = require('./Base');

class WebpackProdConfig extends WebpackBaseConfig {
  constructor() {
    super();
    this.config = {
      // Set extra webpack configuration
    };
  }
}
module.exports = WebpackProdConfig;