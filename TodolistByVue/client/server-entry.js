import createApp from './create-app'

export default context => {
	return new Promise((resolve, reject) => {
		const {
			app,
			router
		} = createApp()
		// 给路由推一条记录
		router.push(context.url)
		// 所有异步操作做完后才会调用这个回调
		router.onReady(() => {
			// 根据URL匹配到相应的组件,结果是一个数组
			const matchedComponents = router.getMatchedComponents()
			if (!matchedComponents.length) {
				return reject(new Error('no component matched'))
			}
			resolve(app)
		})
	})
}