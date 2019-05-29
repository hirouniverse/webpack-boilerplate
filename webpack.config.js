'use strict';

const webpackConfigs = require('./config/webpack');
const defaultConfig = 'dev';

module.exports = (configName) => {

  const requestedConfig = configName || defaultConfig;

  let LoadedConfig = defaultConfig;

  if (webpackConfigs[requestedConfig] !== undefined) {
    LoadedConfig = webpackConfigs[requestedConfig];
  } else {
    LoadedConfig = webpackConfigs[defaultConfig];
  }

  const loadedInstance = new LoadedConfig();

  process.env.NODE_ENV = loadedInstance.env;

  return loadedInstance.config;
};