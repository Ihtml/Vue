import Router from 'vue-router'
import routes from './routes'

export default () =>{
	return new Router({
		routes,
		mode: 'history',
		//base: '/base/' 在路径前默认加上bsse
		//linkActiveClase:'active-link' 路由激活时的class样式名
		//linkExactActiveClass:'exact-active-link' 路由完全匹配时才会添加这个样式
		//路由跳转时页面是否滚动
		scrollBehavior(to,from,savedPosition){
		//from哪个路由to跳转到哪个路由，savedPosition记录滚动条的位置
			if (savedPosition) {
				return savedPosition
			} else {
				return {x:0,y:0}
			}
		},
		//当浏览器不支持history路由时，Vue自动转化为哈希形式
		//设为false时变成多页应用，每次路由跳转都经过后端，返回新的内容，比较耗时
		fallback: true
		//把url后面的query字符串转化成json对象
		// parseQuery(query){

		// },
		// stringifyQuery(obj){

		// }
	})
}
//vue-router默认的路由形式是使用哈希的，url中有'#'。单页面应用而且会有服务端渲染的情况下
//改为history的形式，路由更合理，也更好地使用在SEO里面