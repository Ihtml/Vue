import Vue from 'Vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Meta from 'vue-meta'

import App from './app.vue'
import createRouter from './config/router'
import createStore from './store/store'
//引入组件
import Notification from './components/notification'
import Tabs from './components/tabs'

import './assets/styles/global.styl'

Vue.use(VueRouter) //可以全局使用vue-router
Vue.use(Vuex)
Vue.use(Meta)
// 组件定义在全局
Vue.use(Notification)
Vue.use(Tabs)
// 每次服务端渲染都会渲染一个新的APP
export default () => {
  const router = createRouter()
  const store = createStore()

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  return {
    app,
    router,
    store
  }
}
