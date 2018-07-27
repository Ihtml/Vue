import Vue from 'Vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Meta from 'vue-meta'

import App from './app.vue'
import createRouter from './config/router'
import createStore from './store/store'

import './assets/styles/global.styl'

Vue.use(VueRouter) //可以全局使用vue-router
Vue.use(Vuex)
Vue.use(Meta)
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