//path是node.js里一个基本包，用来处理我们的路径，使用绝对路径，保证不出错误
const Path = require('path')
const Webpack = require('webpack')

//启动脚本时设置的环境变量全部存在process.env这个对象里面
const IsDev = process.env.NODE_ENV === 'development'
const HTMLPlugin = require('html-webpack-plugin')

const Config = {
	target: 'web',
	//__dirname代表当前根目录名
	entry: Path.join(__dirname, 'src/index.js'),
	output: {
		filename: 'bundle.js',
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
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.styl$/,
				use: [
					'style-loader',
					'css-loader',
					'stylus-loader'
				]
			},
			{
				test: /\.(gif|jpg|jpeg|png|svg)$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 1024,
						name: '[name]-atest.[ext]'
					}
				}]
			},
		]
	},
	plugins:[
		//使用Vue、React等框架的时候加上，根据不同的环境下载不同的源码
		new Webpack.DefinePlugin({
			'process.env':{
				NODE_ENV: IsDev ? '"development"' : '"production"'
			}
		}),
		new HTMLPlugin(),
	],
}

if (IsDev) {
	Config.devtool = '#cheap-module-eval-source-map'
	Config.devServer = {
		port: 8000,
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
		new Webpack.HotModuleReplacementPlugin(),
		new Webpack.NoEmitOnErrorsPlugin()
		)
}

module.exports = Config