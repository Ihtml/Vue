import Notification from './notification.vue'
import notify from './function'

export default (Vue) => {
  Vue.component(Notification.name, Notification)
  // 加在prototype上 每个组件都可以通过this方法直接调用
  Vue.prototype.$notify = notify
}
