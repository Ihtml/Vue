const Router = require('koa-router')
// 只有/api开头的路径才会处理
const apiRouter = new Router({ prefix: '/api' })

module.exports = apiRouter
