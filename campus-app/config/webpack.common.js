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
            '@babel/preset-env',
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
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gl(tf|b)|png|jpe?g)$/i,
        use: ['file-loader'],
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
      '.gltf',
      '.glb',
      '.png',
      '.jpg',
      '.jpeg',
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

module.exports = commonConfig;
