//单页面应用页面跳转不经过后端
import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'

export default [{ //默认路由
		path: '/',
		redirect: '/app'
	},
	{
		path: '/app',
		// path: '/app/:id', // /app/xxx传参
		// props: true, // 会把：id作为props传递到todo里面去
		// props: {
		// 	id: '789' // 指定id值传进去
		// },
		// props: (route) => ({
		// 	id: route.query.b
		// }), //通过query传递
		component: Todo,
		// 多个路由情况下用components
		// components: {
		// 	// 没名字的
		// 	default: Todo,
		// 	// 有名字的
		// 	a: Login,
		// },
		//name跟path和component没有关系，根据它可以进行路由跳转
		name: 'app',
		//meta保存路由里的信息,可以通过.meta获取
		meta: {
			title: 'this is app',
			description: 'a description'
		},
		//子路由,显示的内容根据Todo里的router-view做显示
		// children: [{ //现在可以访问 /app/test
		// 	path: 'test',
		// 	component: Login,
		// 	name: 'test1',
		// }]
	},
	{
		path: '/login',
		component: Login,
		// components: {
		// 	default: Login,
		// 	a: Todo,
		// },
		name: 'login',
	}
]