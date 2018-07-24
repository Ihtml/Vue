export default { //方便生成直接在应用里可以用的数据
	fullName(state) {
		return `${state.firstName} ${state.lastName}`
	}
}