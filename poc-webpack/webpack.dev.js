const { merge } = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map', // false o 'eval-source-map'. conviene dejarlo asi para elñ debug de errores en produccion
  module: {
    rules: [
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
    ],
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
  ],
  devServer: {
    static: './dist',
    hot: true,
    open: true,
    port: 3000,
    historyApiFallback: true,
    proxy: [
      { context: ['/api'], target: 'http://localhost:4000', pathRewrite: { '^/api': '' } },
    ],
  },
});
