// 只有node.js的server可以做服务端渲染
const Koa = require('koa')
const send = require('koa-send')
const path = require('path')
const staticRouter = require('./routers/static')
const apiRouter = require('./routers/api')
const app = new Koa()
const isDev = process.env.NODE_ENV === 'development'

const createDb = require('./db/db')
const config = require('../app.config')
const db = createDb(config.db.appId, config.db.appKey)

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
// 请求中间件
app.use(async (ctx, next) => {
  ctx.db = db
  await next()
})

app.use(async (ctx, next) => {
  if (ctx.path === '/favicon.ico') {
    await send(ctx, '/favicon.ico', {
      root: path.join(__dirname, '../')
    })
  } else {
    await next()
  }
})

app.use(staticRouter.routes()).use(staticRouter.allowedMethods())
let pageRouter
if (isDev) {
  pageRouter = require('./routers/dev-ssr')
} else {
  pageRouter = require('./routers/ssr')
}

app.use(apiRouter.routes()).use(apiRouter.allowedMethods())
app.use(pageRouter.routes()).use(pageRouter.allowedMethods())
const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 3333
app.listen(PORT, HOST, () => {
  console.log(`server is listening on ${HOST}:${PORT}`)
})
