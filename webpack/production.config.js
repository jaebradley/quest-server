const merge = require('webpack-merge');
// const {
//   BundleAnalyzerPlugin,
// } = require('webpack-bundle-analyzer');

const base = require('./base.config');

module.exports = merge.smart(
  base,
  {
    mode: 'production',
    devtool: 'source-map',
  },
);
