const path = require('path');

module.exports = {
  ignore: ['**/src/components/Views/**', '**/src/components/**/**.test.**', '**/src/components/**/index.tsx'],
  propsParser: require('react-docgen-typescript').withDefaultConfig().parse,
  webpackConfig: {
    resolve: {
      alias: {
        '@utils': path.resolve(__dirname, 'src/utilities/'),
        '@components': path.resolve(__dirname, 'src/components/'),
        '@containers': path.resolve(__dirname, 'src/containers/'),
        '@redux': path.resolve(__dirname, 'src/redux/')
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
          test: /\.scss$/,
          loaders: ['style-loader', 'typings-for-css-modules-loader', 'sass-loader?precision=10']
        }
      ]
    }
  }
};
