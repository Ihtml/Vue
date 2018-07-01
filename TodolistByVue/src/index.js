import Vue from 'Vue'
import app from './app.vue'

const Root = document.createElement('div')
document.body.appendChildTo(Root)

let vm = new Vue({
	//h是creatElement的别名
	render: (h)=>h(app)
	}).$monted(Root)