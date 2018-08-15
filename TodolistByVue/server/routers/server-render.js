const ejs = require('ejs')

module.exports = async (ctx, renderer, template) => {
  ctx.headers['ContentType'] = 'text/html'
  const context = {
    url: ctx.path,
    user: ctx.session.user
  }
  try {
    const appString = await renderer.renderToString(context)

    if (context.router.currentRoute.fullPath !== ctx.path) {
      return ctx.redirect(context.router.currentRoute.fullPath)
    }
    const {
      title
    } = context.meta.inject()

    const html = ejs.render(template, {
      appString,
      style: context.renderStyles(),
      // 生成script标签
      scripts: context.renderScripts(),
      title: title.text(),
      initalState: context.renderState
    })
    ctx.body = html
  } catch (err) {
    console.log('render error', err)
    throw err
  }
}
