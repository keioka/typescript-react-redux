const configCommon = require('./config.common');
const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');

module.exports = merge(configCommon, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, '../public'),
    // useLocalIp: true,
    // compress: true,
    port: 8080,
    historyApiFallback: true,
    hot: true
  }
});
