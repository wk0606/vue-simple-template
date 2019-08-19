const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

const devConfig = {
  mode: 'development',
  devtool: '#eval-source-map',
  devServer: {
    port: 3333,
    hot: true,
    open: true,
  }
}

module.exports = merge(baseConfig, devConfig)