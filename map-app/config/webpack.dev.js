const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8085,
    historyApiFallback: {
      index: 'index.html',
    },
    // hot: true,
  },
  output: {
    publicPath: 'http://localhost:8085/',
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
