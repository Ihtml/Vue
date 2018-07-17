import Router from 'vue-router'
import routes from './routes'

export default () =>{
	return new Router({
		routes
	})
}
//vue-router默认的路由形式是使用哈希的，单页面应用而且会有服务端渲染的情况下
//会改为history的形式，路由更合理，也更好地使用在SEO里面