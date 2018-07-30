import Vue from 'vue'
import Component from './func-notification'

const NotificationConstructor = Vue.extend(Component)
// 给组件加上id
let seed = 1
const instances = []

const notify = (options) => {
	if (Vue.prototype.$isServer) return

	const instance = new NotificationConstructor({
		propsData: options
	})

	const id = `notification_${seed++}`
	instance.id = id
	// 只是生成了一个$el的对象，还没真正插入到DOM里面去
	instance.vm = instance.$mount()
	document.body.appendChild(instance.vm.$el)

	let verticalOffset = 0
	instances.forEach(item => {
		verticalOffset += item.$el.offsetHeight + 16
	})
	verticalOffset += 16
	instance.verticalOffset = verticalOffset
	instances.push(instance)
	return instance.vm
}

export default notify