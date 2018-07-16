import Vue from 'Vue'
import App from './app.vue'
import VueRouter from 'vue-router'

//导入全局样式
import './assets/styles/global.styl'
import createRouter from './config/router'
//创造一个节点
// const Root = document.createElement('div')
// document.body.appendChild(Root)

Vue.use(VueRouter)//可以全局使用vue-router
const router = createRouter()

let vm = new Vue({
	router,
	//h是creatElement的别名，作用是生成一个VNode节点
	//render函数得到这个VNode节点后，返回给mount函数，渲染成真实的DOM节点，并挂载到根节点上
	render: (h) => h(App)
	}).$mount('#root')//手动挂载