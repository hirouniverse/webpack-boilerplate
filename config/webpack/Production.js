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

  get env() {
    return 'prod';
  }

}
module.exports = WebpackProdConfig;