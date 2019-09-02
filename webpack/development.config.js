const merge = require('webpack-merge');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
// const {
//   BundleAnalyzerPlugin,
// } = require('webpack-bundle-analyzer');
const WebpackBuildNotifier = require('webpack-build-notifier');
const NodemonPlugin = require('nodemon-webpack-plugin');

const base = require('./base.config');
const {
  OUTPUT_DIRECTORY,
} = require('./constants');

module.exports = merge.smart(
  base,
  {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
      // new BundleAnalyzerPlugin(),
      new WebpackBuildNotifier({
        title: 'Quest Server',
      }),
      new HardSourceWebpackPlugin(),
      // Nodemon restarts server in development when output bundle changes
      new NodemonPlugin({
        watch: OUTPUT_DIRECTORY,
        verbose: true,
      }),
    ],
    watch: true,
  },
);
