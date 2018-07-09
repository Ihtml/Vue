import Vue from 'Vue'
import App from './app.vue'
<<<<<<< HEAD
//导入全局样式
=======
// 引入全局样式
>>>>>>> b4c14631f136d89c0149d7a74594d2b7bddd518d
import './assets/styles/global.styl'

//创造一个节点
const Root = document.createElement('div')
document.body.appendChild(Root)
   
let vm = new Vue({
	//h是creatElement的别名，作用是生成一个VNode节点
	//render函数得到这个VNode节点后，返回给mount函数，渲染成真实的DOM节点，并挂载到根节点上
	render: (h) => h(App)
	}).$mount(Root)//手动挂载