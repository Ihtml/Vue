<template>
	<div id="app">
		<div id="cover"></div>
		<Header></Header>
		<Todo></Todo>
		<Footer></Footer>
	</div>
</template>

<script>
	// 这个.vue组件不能直接在浏览器中运行
	import Header from './todo/header.vue'
	import Todo from './todo/todo.vue'
	import Footer from './todo/footer.jsx'

	export default{
		components:{
			Header,
			Todo,
			Footer,
		}
	}
</script>