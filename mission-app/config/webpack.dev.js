const { merge, mergeWithCustomize, customizeArray } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: 'index.html',
    },
    // hot: true,
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
    // new HotModuleReplacementPlugin(),
    // new ReactRefreshWebpackPlugin(),
  ],
};

module.exports = merge(commonConfig, devConfig);
