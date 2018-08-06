const Router = require('koa-router')

const userRouter = new Router({ prefix: '/user' })

userRouter.post('/login', async ctx => {
  const user = ctx.request.body
  if (user.username === 'slien' && user.password === 'slien111') {
    ctx.session.user = {
      username: 'slien'
    }
    ctx.body = {
      success: true,
      data: {
        username: 'slien'
      }
    }
  } else {
    ctx.status = 400
    ctx.body = {
      success: false,
      message: 'username or password error'
    }
  }
})

module.exports = userRouter
