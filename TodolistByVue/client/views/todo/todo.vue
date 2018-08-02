<template>
	<section class="real-app">
    <div class="tab-container">
      <tabs :value="tabValue" @change="handleChangeTab">
        <tab label="tab1" index="1" />
        <tab index="2" ><span slot="label" style="color:red;">tab2</span></tab>
        <tab label="tab3" index="3" />
      </tabs>
    </div>
    <input
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="What do you want to do"
      @keyup.enter="addTodo"
    >
    <item
      v-for="todo in filteredTodos"
      :key="todo.id"
      :todo="todo"
      @del="deleteTodo"
    ></item>
    <helper
      :todos='todos'
      :filter='filter'
      @toggle='toggleFilter'
      @clearAllCompleted='clearAllCompleted'
    ></helper>
    <!-- 这里是todo的子路由 -->
    <!-- <router-view/> -->
  </section>
</template>

<script>
import Item from "./item.vue";
import Helper from "./tabs.vue";
let id = 0;

export default {
  // 渲染过程中 以下级组件的meta渲染上级组件的meta
  metaInfo: {
    title: "The Todo App"
  },
  beforeRouteEnter(to, from, next) {
    // 组件内部钩子
    console.log("before todo enter");
    // next可以接收一个回调
    next(vm => {
      console.log("after todo enter vm.id is:", vm.id);
    });
  },
  beforeRouteUpdate(to, form, next) {
    // 路由更新，组件被复用时触发,并且不会触发组件的mounted
    console.log("todo update");
    next();
  },
  beforeRouteLeave(to, form, next) {
    console.log("todo leave");
    // 可以弹出确认框，用户确认离开再执行next
    // if (global.confirm("are you sure?")) {
    //   next();
    // }
    next();
  },
  props: ["id"], //路由参数作为props传递到组件
  mounted() {
    console.log("todo mounted");
  },
  data() {
    return {
      todos: [],
      filter: "all",
      tabValue: 1
    };
  },
  components: {
    Item,
    Helper
  },
  computed: {
    filteredTodos() {
      if (this.filter === "all") {
        return this.todos;
      }
      const completed = this.filter === "completed";
      return this.todos.filter(atodo => atodo.completed === completed);
    }
  },
  methods: {
    addTodo(e) {
      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      });
      e.target.value = "";
    },
    deleteTodo(id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1);
    },
    toggleFilter(state) {
      this.filter = state;
    },
    clearAllCompleted() {
      this.todos = this.todos.filter(todo => !todo.completed);
    },
    handleChangeTab(index) {
      this.tabValue = index;
    }
  }
};
</script>

<style lang="stylus" scoped>
.real-app {
  width: 600px;
  margin: 40px auto;
  box-shadow: 0 0 5px #666;
}

.add-input {
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  outline: none;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  font-smoothing: antialiased;
  padding: 16px 16px 16px 60px;
  border: none;
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}

.tab-container {
  background-color: #fff;
  padding: 0 15px;
}
</style>
