'use strict';

const dev = require('./Development');
const stg = require('./Staging');
const rc = require('./ReleaseCandidate');
const prod = require('./Production');

module.exports = {
  dev,
  stg,
  rc,
  prod,
};