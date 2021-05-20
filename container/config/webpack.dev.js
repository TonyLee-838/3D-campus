const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const loadENV = require('../env-config');

loadENV();

const HOST_URL = process.env.FRONT_END_HOST;
const PORT = process.env.CONTAINER_PORT;
const STUDIO_PORT = process.env.STUDIO_PORT;
const MAP_PORT = process.env.MAP_PORT;
const CAMPUS_PORT = process.env.CAMPUS_PORT;

const devConfig = {
  mode: 'development',
  output: {
    publicPath: `http://${HOST_URL}:${PORT}/`,
  },
  devServer: {
    port: PORT,
    contentBase: path.join(__dirname),
    historyApiFallback: true,
    host: HOST_URL,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        studio: `studio@http://${HOST_URL}:${STUDIO_PORT}/studioRemoteEntry.js`,
        map: `map@http://${HOST_URL}:${MAP_PORT}/remoteEntry.js`,
        campus: `campus@http://${HOST_URL}:${CAMPUS_PORT}/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
