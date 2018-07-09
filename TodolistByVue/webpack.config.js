//path是node.js里一个基本包，用来处理我们的路径，使用绝对路径，保证不出错误
const Path = require('path')
const Webpack = require('webpack')

//启动脚本时设置的环境变量全部存在process.env这个对象里面
const IsDev = process.env.NODE_ENV === 'development'
//把打包后的js文件插入到HTML里
const HTMLPlugin = require('html-webpack-plugin')

//把非js的的代码打包成一个静态资源文件
const ExtractPlugin = require('extract-text-webpack-plugin')

const Config = {
    target: 'web',
    //__dirname代表当前根目录名
    entry: Path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.[hash:8].js',
        path: Path.join(__dirname, 'dist')
    },
//webpack原生只支持ES5语法的js文件,需要使用loader帮它解释不支持的类型
    module:{
        rules:[
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            //使css以一段js代码出现，并写入到HTML中
            // {
            //     test: /\.css$/,
            //     use: [
            //         'style-loader',
            //         'css-loader'
            //     ]
            // },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        // 图片小于1kb时直接转化为base64写在js内容里面
                        limit: 1024,
                        name: '[name]-test.[ext]'
                    }
                }]
            },
        ]
    },
    plugins:[
        //使用Vue、React等框架的时候加上，根据不同的环境下载不同的源码
        new Webpack.DefinePlugin({
            //判断js运行在开发环境还是生产环境下
            'process.env':{
                NODE_ENV: IsDev ? '"development"' : '"production"'
            }
        }),
        new HTMLPlugin(),
    ],
}
if (IsDev) {
    Config.module.rules.push({
        test: /\.styl/,
        use: [
            'style-loader',
            'css-loader', {
                loader: 'postcss-loader',
                options: {
                    sourceMap: true,
                }
            },
            'stylus-loader',
        ]
    })
    Config.devtool = '#cheap-module-eval-source-map'
    Config.devServer = {
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
    Config.plugins.push(
        // 会在运行过程中替换、添加或删除模块，而无需重新加载整个页面
        new Webpack.HotModuleReplacementPlugin(),
        // 确保输出资源不会包含错误
        new Webpack.NoEmitOnErrorsPlugin()
        )
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

//hash chunkhash content的区别
//hash--是跟整个项目的构建相关，只要项目里有文件更改，整个项目构建的hash值都会更改，并且全部文件都共用相同的hash值
//采用hash计算的话，每一次构建后生成的哈希值都不一样，即使文件内容压根没有改变。这样子是没办法实现缓存效果，
//chunkhash--它根据不同的入口文件(Entry)进行依赖文件解析、构建对应的chunk，生成对应的哈希值。
//在生产环境里把一些公共库和程序入口文件区分开，单独打包构建，接着我们采用chunkhash的方式生成哈希值，那么只要我们不改动公共库的代码，就可以保证其哈希值不会受影响。
//使用extra-text-webpack-plugin里的contenthash值，保证即使一个文件所处的模块里就算其他文件内容改变，只要该文件本身内容不变，那么不会重复构建。