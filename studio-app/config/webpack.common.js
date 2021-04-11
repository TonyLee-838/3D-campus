const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-react',
            ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
          ],
          plugins: [
            [
              '@babel/plugin-transform-runtime',
              {
                absoluteRuntime: false,
                corejs: false,
                helpers: true,
                regenerator: true,
                useESModules: true,
              },
            ],
            '@babel/plugin-transform-modules-commonjs',
          ],
        },
        include: [path.resolve('.')],
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,

        options: {
          presets: ['@babel/preset-react'],
          plugins: [
            '@babel/plugin-transform-flow-strip-types',
            [
              '@babel/plugin-transform-runtime',
              {
                absoluteRuntime: false,
                corejs: false,
                helpers: true,
                regenerator: true,
                useESModules: true,
              },
            ],
            '@babel/plugin-transform-modules-commonjs',
          ],
        },
        include: [path.resolve('.')],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.css$/i,
        loader: 'css-loader',
      },
    ],
  },

  resolve: {
    extensions: ['.web.js', '.web.ts', '.web.tsx', '.tsx', '.ts', '.js', '.json', '.jsx', '.css'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
