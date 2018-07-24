import Vuex from 'vuex'
import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

const IsDev = process.env.NODE_ENV === 'development'
export default () => { // 每次新生成一个store而不是共同一个store
	return new Vuex.Store({
		// 初始状态
		state: defaultState,
		// 修改state(同步)
		mutations,
		// 修改state(异步)
		actions,
		// 获取数据
		getters,
		// 设置无法从外部修改数据,仅适合在开发环境使用
		strict: IsDev,
	})
}