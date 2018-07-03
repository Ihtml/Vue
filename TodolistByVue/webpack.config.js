//path是node.js里一个基本包，用来处理我们的路径，使用绝对路径，保证不出错误
const Path = require('path')
const Webpack = require('webpack')

module.exports = {
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
	}
}
