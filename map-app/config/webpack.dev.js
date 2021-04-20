const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const loadENV = require('../env-config');

loadENV();

const PORT = process.env.MAP_PORT;
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
      name: 'map',
      filename: 'remoteEntry.js',
      exposes: {
        './MapApp': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
