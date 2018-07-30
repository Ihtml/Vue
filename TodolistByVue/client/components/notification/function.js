import Vue from 'vue'
import Component from './func-notification'

const NotificationConstructor = Vue.extend(Component)
// 给组件加上id
let seed = 1
const instances = []

const notify = (options) => {
	if (Vue.prototype.$isServer) return

	const {
		autoClose,
		...rest
	} = options
	const instance = new NotificationConstructor({
		propsData: {
			...rest
		},
		data: {
			autoClose: autoClose === undefined ? 3000 : autoClose
		}
	})

	const id = `notification_${seed++}`
	instance.id = id
	// 只是生成了一个$el的对象，还没真正插入到DOM里面去
	instance.vm = instance.$mount()
	document.body.appendChild(instance.vm.$el)
	instance.vm.visible = true

	let verticalOffset = 0
	instances.forEach(item => {
		verticalOffset += item.$el.offsetHeight + 16
	})
	verticalOffset += 16
	instance.verticalOffset = verticalOffset
	instances.push(instance)

	instance.vm.$on('close', () => {
		instance.vm.visible = false
	})
	return instance.vm
}

export default notify