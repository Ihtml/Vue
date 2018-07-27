<template>
    <div id="app">
        <div id="cover"></div>
        <Header></Header>
        <p>count: {{count}}</p>
        <p>fullName: {{fullName}}</p>
        <p>counter: {{counter}}</p>
        <p>textA: {{textA}}</p>
        <p>textB: {{textB}}</p>
        <!-- <p>textC: {{textC}}</p> -->
        <p>textPlus: {{textPlus}}</p>
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
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
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
    // 可以全局使用$store对象
    console.log(this.$store);
    console.log(this.textPlus);
    // dispatch用来触发action，类似commit用来触发mutation
    // this.$store.dispatch("updateCountAsync", {
    //   num: 5,
    //   time: 2000
    // });
    // 简写
    this.updateCountAsync({
      num: 5,
      time: 2000
    });
    this.updateTextA("newTextA");
    this["b/updateTextB"]("newTextB");
    this["b/add"]();
    this.testB();
    // let i = 1;
    // setInterval(() => {
    //   this.$store.commit("updateCount", {
    //     num: i++,
    //     num2: 2
    //   });
    // }, 1000);
    // // 简写
    // setInterval(() => {
    //   this.updateCount({
    //     num: i++,
    //     num2: 2
    //   });
    // }, 1000);
  },
  // 获取数据
  computed: {
    ...mapState(["count"]), // ES7语法 使用对象展开运算符将getter混入computed对象中 需要安装babel-preset-stage支持
    // ...mapState({
    //   counter: "count" // 除了数组形式，也可以使用对象形式
    // }),
    ...mapState({
      counter: state => state.count, // 方法形式
      textA: state => state.a.text,
      textB: state => state.b.text
      //   textC: state => state.c.text
    }),
    // ...mapGetters(["fullName", "b/textPlus"])
    ...mapGetters({
      fullName: "fullName",
      textPlus: "b/textPlus"
    })
    // count() {
    //   return this.$store.state.count;
    // },
    // fullName() {
    //   return this.$store.getters.fullName;
    // }
  },
  // 操作数据
  methods: {
    // 异步方法
    ...mapActions(["updateCountAsync", "b/add", "testB"]), //命名空间里的方法需要加上路径 /
    // 同步方法
    ...mapMutations(["updateCount", "updateTextA", "b/updateTextB"])
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
