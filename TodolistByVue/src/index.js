import Vue from 'Vue'
import App from './app.vue'

//创造一个节点
const Root = document.createElement('div')
document.body.appendChildTo(Root)

let vm = new Vue({
	//h是creatElement的别名
	render: (h) = >h(App)
	}).$mount(Root)//手动挂载