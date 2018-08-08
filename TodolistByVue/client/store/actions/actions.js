// mutations必须要同步去操作,不能有异步的代码写在motations里面
// 异步的代码必须放在action里 处理异步修改代码的方法

import model from '../../model/client-model'
import notify from '../../components/notification/function'

const handleError = (err) => {
  if (err.code === 401) {
    notify({
      content: '要先登录哦'
    })
  }
}
export default {
  updateCountAsync(store, data) {
    setTimeout(() => {
      store.commit('updateCount', {
        num: data.num,
        num2: 'num2=num1: ' + data.num
      })
    }, data.time)
  },
  fetchTodos({
    commit
  }) {
    return model.getAllTodos()
      .then(data => {
        commit('fillTodos', data)
      })
      .catch(err => {
        handleError(err)
      })
  },
  login({
    commit
  }, {}) {
    commit('')
    return new Promise(() => {

    })
  }
}
