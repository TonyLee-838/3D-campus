const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const loadENV = require('../env-config');

const envs = loadENV();

const PORT = process.env.STUDIO_PORT;
const MISSION_PORT = process.env.MISSION_PORT;
const QUIZ_PORT = process.env.QUIZ_PORT;
const HOST_URL = process.env.FRONT_END_HOST;

const devConfig = {
  mode: 'development',

  output: {
    publicPath: `http://${HOST_URL}:${PORT}/`,
  },
  devServer: {
    port: PORT,
    historyApiFallback: true,
    host: HOST_URL,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'studio',
      filename: 'studioRemoteEntry.js',
      exposes: {
        './StudioApp': './src/bootstrap',
      },
      remotes: {
        mission: `mission@http://${HOST_URL}:${MISSION_PORT}/remoteEntry.js`,
        quiz: `quiz@http://${HOST_URL}:${QUIZ_PORT}/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.DefinePlugin(envs),
  ],
};

module.exports = merge(commonConfig, devConfig);
