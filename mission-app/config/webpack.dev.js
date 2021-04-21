const path = require('path');
const { merge, mergeWithCustomize, customizeArray } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const loadENV = require('../env-config');

loadENV();

const PORT = process.env.MISSION_PORT;
const HOST_URL = process.env.FRONT_END_HOST;

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'auto',
  },
  devServer: {
    port: PORT,
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: {
      index: 'index.html',
    },
    host: HOST_URL,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'mission',
      filename: 'remoteEntry.js',
      exposes: {
        './MissionApp': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
