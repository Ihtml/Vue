import Vue from 'Vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './app.vue'

// 导入全局样式
import './assets/styles/global.styl'

import createRouter from './config/router'
import createStore from './store/store'

// 创造一个节点
// const Root = document.createElement('div')
// document.body.appendChild(Root)

Vue.use(VueRouter) //可以全局使用vue-router
Vue.use(Vuex)
const router = createRouter() // 路由关系
const store = createStore() // 状态

//动态注册模块
store.registerModule('c', {
	state: {
		text: 3
	}
})

//导航守卫,每次路由跳转都会触发,全局钩子
router.beforeEach((to, from, next) => {
	console.log('before each invoked')
	// if (to.fullPath === '/app') {
	// 	next({
	// 		path: '/login',
	// 		replace
	// 	}) // 可以用来做判断，当用户没有登录时跳转到登录页面
	// } else {
	// 	next()
	// }
	next()
})
router.beforeResolve((to, from, next) => {
	console.log('before resolve invoked')
	next()
})
router.afterEach((to, from) => {
	console.log('after each invoked')
})

new Vue({
	router,
	store,
	// h是creatElement的别名，作用是生成一个VNode节点
	// render函数得到这个VNode节点后，返回给mount函数，渲染成真实的DOM节点，并挂载到根节点上
	render: (h) => h(App)
}).$mount('#root') //手动挂载