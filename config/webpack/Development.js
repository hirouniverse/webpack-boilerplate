'use strict';

const webpack = reuqire('webpack');
const WebpackBaseConfig = require('./Base');

class WebpackDevConfig extends WebpackBaseConfig {
  constructor() {
    super();
    this.config = {
      // Set extra webpack configuration like;
      devtool: '',
      entry: '',
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
      ],
    };

    this.config.module.rules = this.config.module.rules.concat([{}]);
  }
}
module.exports = WebpaclDevConfig;