export default { //方便生成直接在应用里可以用的数据,可以认为是store的计算属性，
	fullName(state) {
		// getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
		return `${state.firstName} ${state.lastName}`
	}
}