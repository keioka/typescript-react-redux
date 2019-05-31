const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');

module.exports = {
  entry: {
    main: path.join(__dirname, '../src/index.tsx')
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'react-redux-vendors',
          chunks: 'all',
          test: /[\\/]node_modules[\\/](react|react-dom|redux|redux-saga|react-router)[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  output: {
    path: path.join(__dirname, '../public/'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js'
  },
  resolve: {
    alias: {
      '@utils': path.resolve(__dirname, '../src/utilities/'),
      '@components': path.resolve(__dirname, '../src/components/'),
      '@containers': path.resolve(__dirname, '../src/containers/'),
      '@redux': path.resolve(__dirname, '../src/redux/')
    },
    extensions: ['.tsx', '.ts', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.json?$/,
        use: 'json-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'typings-for-css-modules-loader',
            options: { modules: true, namedExport: true, camcelCase: 'only' }
          },
          'sass-loader'
        ]
      },
      {
        test: /normalize.css/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.ttf$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new PreloadWebpackPlugin({
      rel: 'preload',
      as(entry) {
        // TODO: font is not preloaded somehow
        if (/\.ttf$/.test(entry)) return 'font';
        return 'script';
      }
    })
  ]
};
