const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin  } = require('vue-loader')
const { util } = require('./utils.js')
/*** */
// function assetsPath(_path_){
//   const assetsSubDirectory = process.env.NODE_ENV === 'production' ? 'static' : 'static'
//   return path.posix.join(assetsSubDirectory, _path_)
// }
//publicPath: process.env.NODE_ENV === 'production' ? '/' : '/'
module.exports = {
  entry: ['babel-polyfill','./src/main.js'],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: util.assetsPath('js/[name]-[hash].js')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../../'
            }
          },
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../../'
            }
          },
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          'less': [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'less-loader'
          ]
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)/,
        use: {
          loader: 'url-loader',
          options: {
            name: util.assetsPath('images/[name].[hash:7].[ext]'), // 图片输出的路径
            limit: 1 * 1024
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: util.assetsPath('fonts/[name].[ext]'),
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: util.assetsPath('css/[name]-[hash].css'),
      chunkFilename: util.assetsPath('css/[id].css')
    })
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  //提取公共代码
  optimization: {
    minimize: false, //是否进行代码压缩
    splitChunks: {
      chunks: "async",
      minSize: 30000, //模块大于30k会被抽离到公共模块
      minChunks: 1, //模块出现1次就会被抽离到公共模块
      maxAsyncRequests: 5, //异步模块，一次最多只能被加载5个
      maxInitialRequests: 3, //入口模块最多只能加载3个
      name: true,
      cacheGroups: {
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        }
      }
    },
    runtimeChunk: {
      name: "runtime"
    }
  },
}
