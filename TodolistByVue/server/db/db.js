// 请求线上数据库的签名
const sha1 = require('sha1')
const axios = require('axios')

// 所有数据都存在这个命名空间下面,每个请求把classname带上才知道操作哪个数据库
const className = 'todo'

const request = axios.create({
  baseURL: 'https://d.apicloud.com/mcm/api'
})
module.exports = (appId, appKey) => {
  // 每次请求线上数据库都要加上的请求头
  const getHeaders = () => {
    const now = Date.now()
    return {
      'X-APICloud-AppId': appId,
      'X-APICloud-AppKey': `${sha1(`${appId}UZ${appKey}UZ${now}`)}.${now}`
    }
  }
  return {
    async getAllTodos () {
      await request.get()
    }
  }
}
