import Vuex from 'vuex'
import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'

export default () => { // 每次新生成一个store而不是共同一个store
	return new Vuex.Store({
		// 初始状态
		state: defaultState,
		// 修改state
		mutations,
		// 获取数据
		getters
	})
}