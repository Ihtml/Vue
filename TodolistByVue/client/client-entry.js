import createApp from './create-app'
import bus from './util/bus'

const {
  app,
  router,
  store
} = createApp()

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}
// 事件订阅，全局都可以应用
bus.$on('auth', () => {
  router.push('/login')
  alert("跳转到login")
})

router.onReady(() => {
  app.$mount('#root')
})
