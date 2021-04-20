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
            [
              '@babel/plugin-transform-runtime',
              {
                absoluteRuntime: false,
                corejs: false,
                helpers: true,
                regenerator: true,
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
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/i,
        use: ['style-loader', 'sass-loader', 'css-loader'],
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

module.exports = commonConfig;
