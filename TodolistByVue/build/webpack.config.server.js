const Path = require('path')
const Webpack = require('webpack')
//这个包可以合并不同的webpack配置
const Merge = require('webpack-merge')
//把非js的的代码打包成一个静态资源文件
const ExtractPlugin = require('extract-text-webpack-plugin')
//引入webpack基本配置
const BaseConfig = require('./webpack.config.base')
const VueServerPlugin = require('vue-server-renderer/server-plugin')

let config
config = Merge(BaseConfig, {
  // 打包出来的程序是在node端运行的
  target: 'node',
  entry: Path.join(__dirname, '../client/server-entry.js'),
  devtool: 'source-map',
  output: {
    libraryTarget: 'commonjs2', // module.exports =
    filename: 'server-entry.js',
    path: Path.join(__dirname, '../server-build')
  },
  externals: Object.keys(require('../package.json').dependencies),
  module: {
    rules: [{
      test: /\.styl/,
      use: ExtractPlugin.extract({
        fallback: 'vue-style-loader',
        use: [
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            }
          },
          'stylus-loader'
        ]
      })
    }]
  },
  plugins: [
    new ExtractPlugin('styles.[contentHash:8].css'),
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"',
    }),
    new VueServerPlugin()
  ]
})
config.resolve = {
  alias: {
    'model': Path.join(__dirname, '../client/model/server-model.js')
  }
}
module.exports = config
