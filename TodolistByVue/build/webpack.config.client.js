const Path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const Webpack = require('webpack')
//这个包可以合并不同的webpack配置
const Merge = require('webpack-merge')
//把非js的的代码打包成一个静态资源文件
const ExtractPlugin = require('extract-text-webpack-plugin')
//引入webpack基本配置
const BaseConfig = require('./webpack.config.base')
const VueClientPlugin = require('vue-server-renderer/client-plugin')
const IsDev = process.env.NODE_ENV === 'development'
const DefaultPlugins = [
	new Webpack.DefinePlugin({
		//判断js运行在开发还是生产环境下
		'process.env': {
			NODE_ENV: IsDev ? '"development"' : '"production"'
		}
	}),
	new HTMLPlugin({
		template: Path.join(__dirname, 'template.html')
	}),
	new VueClientPlugin()
]

let config
const devServer = {
	port: 8000,
	//可以通过localhost和127.0.0.1访问，别的电脑也可以通过本机的内网IP访问
	host: '0.0.0.0',
	//直接在页面上显示错误信息
	overlay: {
		errors: true,
	},
	//自动打开页面
	open: true,
	//不刷新页面
	hot: true,
	//所有的页面刷新跳转将指向index.html
	historyApiFallback: {
		index: '/public/index.html'
	}
}


if (IsDev) {
	config = Merge(BaseConfig, {
		devtool: '#cheap-module-eval-source-map',
		module: {
			rules: [{
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
			}]
		},
		devServer,
		plugins: DefaultPlugins.concat([
			// 会在运行过程中替换、添加或删除模块，而无需重新加载整个页面
			new Webpack.HotModuleReplacementPlugin(),
			// 确保输出资源不会包含错误
			new Webpack.NoEmitOnErrorsPlugin()
		])
	})
} else {
	//正式环境
	config = Merge(BaseConfig, {
		entry: {
			app: Path.join(__dirname, '../client/client-entry.js'),
			//使浏览器尽可能长时间缓存框架代码,减少服务器流量,用户加载速度更快
			vendor: ['vue'],
		},
		output: {
			filename: '[name].[chunkhash:8].js',
			publicPath: '/public/'
		},
		module: {
			rules: [{
				test: /\.styl/,
				use: ExtractPlugin.extract({
					fallback: 'style-loader',
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
		plugins: DefaultPlugins.concat([
			new ExtractPlugin('styles.[contentHash:8].css'),
			//类库文件单独打包
			new Webpack.optimize.CommonsChunkPlugin({
				name: 'vendor'
			}),
			//webpack相关的代码单独打包到一个文件里面
			new Webpack.optimize.CommonsChunkPlugin({
				name: 'runtime'
			})
		])
	})
}

module.exports = config