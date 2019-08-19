const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base.js')

const prodConfig = {
  mode: 'production'
}

module.exports = merge(prodConfig, baseConfig)
