// mutation用来规范数据的修改
export default {
  // 修改数据的方法
  updateCount(state, { //只能传两个参数，第二个参数是个对象，包含修改state要传的数据
    num,
    num2
  }) {
    state.count = num
    console.log('num2', num2)
  },
  fillTodos(state, todos) {
    state.todos = todos
  },
  doLogin(state, userInfo) {
    state.user = userInfo
  },
  addTodo(state, todo) {
    state.todos.unshift(todo)
  },
}
