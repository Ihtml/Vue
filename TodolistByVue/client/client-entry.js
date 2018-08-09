import createApp from './create-app'
import bus from './util/bus'

const {
  app,
  router
} = createApp()
// 事件订阅，全局都可以应用
bus.$on('auth', () => {
  router.push('/login')
  alert("跳转到login")
})

router.onReady(() => {
  app.$mount('#root')
})
