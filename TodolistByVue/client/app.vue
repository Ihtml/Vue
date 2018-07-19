<template>
	<div id="app">
		<div id="cover"></div>
		<Header></Header>
		<!-- router-link相当于a标签 -->
    <!-- 使用：to使Vue去解析它而不是当成字符串来处理 -->
		<router-link :to="{name: 'app'}">app</router-link>
		<router-link to='/login/user101'>login</router-link>
		<!-- <Todo></Todo> -->
		<!-- 加上过渡动画 -->
		<transition name="fade">
    <!-- router-view是占位符,内容为路由component的内容 -->
		<router-view/>
		</transition>
		<Footer></Footer>
		<!-- 多个路由 -->
		<router-view name="a"/>
	</div>
</template>

<script>
	// 这个.vue组件不能直接挂载到HTML上在浏览器中运行
	import Header from './layout/header.vue'
	import Todo from './views/todo/todo.vue'
	import Footer from './layout/footer.jsx'

	export default{
		components:{
			Header,
			Todo,
			Footer,
		},
		mounted () {
			console.log(this.$route)
		}
	}
</script>

<!-- 加载组件时才会加载样式,节省流量 -->
<style lang="stylus" scoped>
    #app{
        position absolute
        left 0
        right 0
        top 0
        bottom 0
    }
    #cover{
        position absolute
        left 0
        top 0
        right 0
        bottom 0
        background-color: #999
        opacity .1
        z-index -1
    }
</style>
