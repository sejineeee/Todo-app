const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.tsx'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['ts-loader', 'babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '...'],
  },
  devServer: {
    historyApiFallback: {
      index: 'index.html',
    },
  },
};
