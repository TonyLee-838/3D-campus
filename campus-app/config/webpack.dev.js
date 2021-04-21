const path = require('path');
// const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
// const Dotenv = require('dotenv-webpack');

const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const loadENV = require('../env-config');
loadENV();

const PORT = process.env.CAMPUS_PORT;
const HOST_URL = process.env.FRONT_END_HOST;

const devConfig = {
  mode: 'development',
  devServer: {
    port: PORT,
    historyApiFallback: true,
    // contentBase: path.join(__dirname, 'dist'),
    host: HOST_URL,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  output: {
    publicPath: `http://${HOST_URL}:${PORT}/`,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'campus',
      filename: 'remoteEntry.js',
      exposes: {
        './CampusApp': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    // new webpack.DefinePlugin({
    //   'window.env.REACT_APP_PUBLIC_PATH': JSON.stringify(`http://${HOST_URL}:${PORT}`),
    // }),
    // new webpack.EnvironmentPlugin(['FRONT_END_HOST', 'CAMPUS_PORT']),
    // new Dotenv(),
  ],
};

module.exports = merge(commonConfig, devConfig);
