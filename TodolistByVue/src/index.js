import Vue from 'Vue'
import App from './app.vue'

//创造一个节点
const Root = document.createElement('div')
document.body.appendChildTo(Root)

let vm = new Vue({
	//h是creatElement的别名，作用是生成一个VNode节点
	//render函数得到这个VNode节点后，返回给mount函数，渲染成真实的DOM节点，并挂载到根节点上
	render: (h) => h(App)
	}).$mount(Root)//手动挂载