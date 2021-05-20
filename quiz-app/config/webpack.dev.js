const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const loadENV = require('../env-config');

loadENV();

const PORT = process.env.QUIZ_PORT;
const HOST_URL = process.env.FRONT_END_HOST;

const devConfig = {
  mode: 'development',
  devServer: {
    port: PORT,
    host: HOST_URL,
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  output: {
    publicPath: 'auto',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'quiz',
      filename: 'remoteEntry.js',
      exposes: {
        './QuizApp': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
