import Vuex from 'vuex'

export default () => { // 每次新生成一个store而不是共同一个store
	return new Vuex.Store({
		// 初始状态
		state: {
			count: 0
		},
		// 修改state
		mutations: {
			updateCount(state, num) {
				state.count = num
			}
		}
	})
}