const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    static: './dist',
    hot: true,
    open: true,
    port: 3000,
    historyApiFallback: true, // necesario para react-router en modo BrowserRouter
    // proxy: reenvia /api/* hacia json-server (puerto 4000), evitando
    // problemas de CORS y permitiendo usar rutas relativas en el cliente.
    // Es otro punto valido para comparar contra la config de "server.proxy" de Vite.
    proxy: [
      {
        context: ['/api'],
        target: 'http://localhost:4000',
        pathRewrite: { '^/api': '' },
      },
    ],
  },
});
