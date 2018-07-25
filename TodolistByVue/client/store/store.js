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
		modules: {
			a: {
				state: {
					text: 'text-a'
				},
				mutations: { // 默认情况下，模块内部的 action、mutation 和 getter 是注册在全局命名空间的
					updateTextA(state, num) { // 这个state是a模块里的state
						state.text = num
					}
				},
				actions: {
					testB({
						commit
					}) {
						setTimeout(() => {
							commit('b/updateTextB', 'from a test b', {
								root: true
							})
						}, 5000)
					}
				}
			},
			b: {
				namespaced: true,
				state: {
					text: 'text-b'
				},
				mutations: { // 当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名。
					updateTextB(state, num) {
						state.text = num
					}
				},
				getters: {
					textPlus(state, getters, rootState) {
						return state.text + ' & ' + rootState.a.text + rootState.count // text-a & text-b
					}
				},
				actions: {
					add({
						state,
						commit,
						rootState
					}) { // context={state, commit, rootState}
						setTimeout(() => {
							// commit('updateTextB', rootState.firstName)
							// 声明namespaced后commit会默认加上b/,相当于b/updateTextB
							commit('updateCount', {
								num: 56789,
								num2: 2333
							}, {
								root: true
							})
						}, 3500)
						// commit('updateTextB', rootState.firstName) // updateTextB只会在当前模块的motations里面去找而不是到全局去找
						commit('updateCount', {
							num: 12345,
							num2: 1112
						}, {
							root: true
						}) // 如果要在全局去找，需要加上{root：true}
					}
				}
			}
		},
		// 设置无法从外部修改数据,仅适合在开发环境使用
		strict: IsDev,
	})
}