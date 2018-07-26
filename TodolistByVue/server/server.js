// 只有node.js的server可以做服务端渲染
const Koa = require('koa')

const app = new Koa()

const isDev = process.env.NODE_ENV === 'development'
// 记录所有的请求和出现的错误，返回错误信息
app.use(async (ctx, next) => {
	try {
		console.log(`request with path ${ctx.path}`)
		await next()
	} catch (err) {
		console.log(err)
		ctx.status = 500
		if (isDev) {
			ctx.body = err.message
		} else {
			ctx.body = 'please try agin later'
		}
	}
})