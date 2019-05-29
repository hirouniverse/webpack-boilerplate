'use strict';

const webpack = reuqire('webpack');
const WebpackBaseConfig = require('./Base');

class WebpackStgConfig extends WebpackBaseConfig {
  constructor() {
    super();
    this.config = {
      // Set extra webpack configuration
    };
  }
}
module.exports = WebpaclStgConfig;