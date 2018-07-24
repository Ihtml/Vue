export default { //方便生成直接在应用里可以用的数据,类似computed
	fullName(state) {
		return `${state.firstName} ${state.lastName}`
	}
}