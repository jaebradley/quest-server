const path = require('path');
const {
  CleanWebpackPlugin,
} = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const nodeExternals = require('webpack-node-externals');

const {
  BASE_DIRECTORY,
  ENTRY_FILE_PATH,
  OUTPUT_DIRECTORY,
  SOURCE_DIRECTORY,
} = require('./constants');

module.exports = {
  entry: ENTRY_FILE_PATH,
  output: {
    filename: 'index.js',
    path: OUTPUT_DIRECTORY,
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: [
          SOURCE_DIRECTORY,
        ],
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: [
      '.json',
      // mjs needs to be before jsx
      // https://github.com/graphql/graphql-js/issues/1272#issuecomment-377384574
      '.mjs',
      '.js',
    ],
    alias: {
      Data: path.resolve(BASE_DIRECTORY, 'src/data'),
      GraphQL: path.resolve(BASE_DIRECTORY, 'src/graphql'),
      Middlewares: path.resolve(BASE_DIRECTORY, 'src/middlewares'),
      Requests: path.resolve(BASE_DIRECTORY, 'src/requests'),
      Routes: path.resolve(BASE_DIRECTORY, 'src/routes'),
      Store: path.resolve(BASE_DIRECTORY, 'src/store'),
      Src: path.resolve(BASE_DIRECTORY, 'src'),
      Utilities: path.resolve(BASE_DIRECTORY, 'src/utilities'),
    },
  },
  plugins: [
    // Delete output directory on each rebuild to avoid out-of-date file artifacts
    // (i.e file was deleted but isn't deleted from output directory)
    new CleanWebpackPlugin(),
    new Dotenv(),
  ],
  // https://webpack.js.org/concepts/targets/#usage
  target: 'node',
  externals: [
    nodeExternals(),
  ],
};
