'use strict';

const webpack = require('webpack');
const WebpackBaseConfig = require('./Base');

class WebpackRCConfig extends WebpackBaseConfig {
  constructor() {
    super();
    this.config = {
    };
  }

  get env() {
    return 'rc';
  }
  
}
module.exports = WebpackRCConfig;