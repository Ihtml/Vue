import Notification from './notification.vue'

export default {
	// 通过extends可以覆盖某些内容
	extends: Notification,
	computed: {
		style() {
			return {
				position: 'fixed',
				right: '20px',
				bottom: `${this.verticalOffset}px`
			}
		}
	},
	data() {
		return {
			verticalOffset: 0
		}
	}
}