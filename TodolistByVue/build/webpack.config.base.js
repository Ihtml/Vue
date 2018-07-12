//webpack都会用到的共同的配置
const Path = require('path')
const IsDev = process.env.NODE_ENV === 'development'

const Config = {
    target: 'web',
    entry: Path.join(__dirname, '../client/index.js'),
    output: {
        filename: 'bundle.[hash:8].js',
        path: Path.join(__dirname, '../dist')
    },
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
            {
                test: /\.js/,
                loader: 'babel-loader',
                //忽略node_module里的js,它们在发布的过程中已经编译过
                exclude: /node_module/
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
                        name: 'resources/[path][name].[hash:8].[ext]'
                    }
                }]
            },
        ]
    }
}


module.exports = Config

