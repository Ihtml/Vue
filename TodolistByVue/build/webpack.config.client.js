//path是node.js里一个基本包，用来处理我们的路径，使用绝对路径，保证不出错误
const Path = require('path')
const Webpack = require('webpack')
//启动脚本时设置的环境变量全部存在process.env这个对象里面
const IsDev = process.env.NODE_ENV === 'development'
//把打包后的js文件插入到HTML里
const HTMLPlugin = require('html-webpack-plugin')
//把非js的的代码打包成一个静态资源文件
const ExtractPlugin = require('extract-text-webpack-plugin')

//引入webpack基本配置
const BaseConfig = require('./webpack.config.base')
//这个包可以合并不同的webpack配置
const Merge = require('webpack-merge')

let config
const devServer = {
        port: 8000,
        //可以通过localhost和127.0.0.1访问，别的电脑也可以通过本机的内网IP访问
        host: '0.0.0.0',
        //直接在页面上显示错误信息
        overlay:{
            errors: true,
        },
        //自动打开页面
        open: true,
        //不刷新页面
        hot: true,
}


if (IsDev) {
    config = merge(BaseConfig,{
        devtool:'#cheap-module-eval-source-map',
        module:{
            rules:[
            {
               test: /\.styl/,
               use: [
                   'style-loader',
                   'css-loader', 
                   {
                       loader: 'postcss-loader',
                       options: {
                           sourceMap: true,
                       }
                   },
                   'stylus-loader',
               ] 
            }
            ]
        },
        devServer,
        plugins:[
            // 会在运行过程中替换、添加或删除模块，而无需重新加载整个页面
            new Webpack.HotModuleReplacementPlugin(),
            // 确保输出资源不会包含错误
            new Webpack.NoEmitOnErrorsPlugin()
        ]
    })
} else {
    //生产环境
    //框架代码和业务逻辑代码分开打包
    Config.entry = {
        app: Path.join(__dirname, 'src/index.js'),
        //使浏览器尽可能长时间缓存框架代码,减少服务器流量,用户加载速度更快
        vendor: ['vue'],
    }
    //使用chunkhash每个模块单独生成hash,形成区别
    Config.output.filename = '[name].[chunkhash:8].js'
    Config.module.rules.push({
        test: /\.styl/,
        use: ExtractPlugin.extract({
            fallback: 'style-loader',
            use: [
                'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                    }
                },
                'stylus-loader'
            ]
        })
    }, )
    Config.plugins.push(
        new ExtractPlugin('styles.[contentHash:8].css'),
        //类库文件单独打包
        new Webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        //webpack相关的代码单独打包到一个文件里面
        new Webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        })
    )
}

module.exports = Config

