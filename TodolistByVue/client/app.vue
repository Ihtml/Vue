<template>
    <div id="app">
        <div id="cover"></div>
        <Header></Header>
        <!-- router-link相当于a标签 -->
        <!-- 使用：to使Vue去解析它而不是当成字符串来处理 -->
        <router-link to="/app/233">app233</router-link>
        <!-- 路由参数 -->
        <router-link to="/app/abc">appabc</router-link>
        <!-- <router-link :to="{name: 'test1'}">child</router-link> -->
        <router-link :to="{name: 'login'}">login</router-link>

        <!-- 加上过渡动画 -->
        <!-- router-view是占位符,内容为路由component的内容 -->
        <transition name="fade">
            <router-view/>
        </transition>
        <!-- 多个路由时 -->
        <!-- <router-view name="a"/> -->
        <Footer></Footer>
    </div>
</template>

<script>
// 这个.vue组件不能直接挂载到HTML上在浏览器中运行
import Header from "./layout/header.vue";
// import Todo from "./views/todo/todo.vue";
import Footer from "./layout/footer.jsx";

export default {
  components: {
    Header,
    // Todo,
    Footer
  },
  mounted() {
    // 单页面应用公用一个路由
    console.log(this.$route);
  }
};
</script>

<!-- 加载组件时才会加载样式,节省流量 -->
<style lang="stylus" scoped>
#app {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}

#cover {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #999;
    opacity: 0.1;
    z-index: -1;
}
</style>
