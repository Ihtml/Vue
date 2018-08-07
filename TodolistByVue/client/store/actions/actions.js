// mutations必须要同步去操作,不能有异步的代码写在motations里面
// 异步的代码必须放在action里 处理异步修改代码的方法
export default {
  updateCountAsync(store, data) {
    setTimeout(() => {
      store.commit('updateCount', {
        num: data.num,
        num2: 'num2=num1: ' + data.num
      })
    }, data.time)
  },
  login({ commit }, { }) {
    commit('')
    return new Promise(() => {

    })
  }
}
