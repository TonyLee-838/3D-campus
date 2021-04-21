const path = require('path');

const commonConfig = {
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-react',
            ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
          ],
          plugins: [
            // 'react-refresh/babel',

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
      // {
      //   test: /\.jsx?$/,
      //   loader: 'babel-loader',
      //   exclude: /node_modules/,

      //   options: {
      //     presets: ['@babel/preset-react'],
      //     plugins: [
      //       '@babel/plugin-transform-flow-strip-types',
      //       [
      //         '@babel/plugin-transform-runtime',
      //         {
      //           absoluteRuntime: false,
      //           corejs: false,
      //           helpers: true,
      //           regenerator: true,
      //           useESModules: true,
      //         },
      //       ],
      //       '@babel/plugin-transform-modules-commonjs',
      //     ],
      //   },
      //   include: [path.resolve('.')],
      // },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.gif$/i,
        loader: 'file-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  resolve: {
    extensions: [
      '.web.js',
      '.web.ts',
      '.web.tsx',
      '.tsx',
      '.ts',
      '.js',
      '.json',
      '.jsx',
      '.css',
      '.gif',
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

module.exports = commonConfig;
