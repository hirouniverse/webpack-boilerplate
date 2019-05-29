'use strict';

const path = require('path');

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
    };
  }
}
module.exports = WebpackBaseConfig;