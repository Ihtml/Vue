const Router = require('koa-router')
// 只有/api开头的路径才会处理
const apiRouter = new Router({
  prefix: '/api'
})

const successResponse = (data) => {
  return {
    success: true,
    data
  }
}
apiRouter.get('/todos', async (ctx) => {
  const todos = await ctx.db.getAllTodos()
  ctx.body = successResponse(todos)
})

module.exports = apiRouter
