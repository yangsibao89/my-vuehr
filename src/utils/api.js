import axios from 'axios'
import { Message } from 'element-ui'

axios.interceptors.response.use(
  success => {
    if (success.status && success.status === 200 && success.data.status === 500) {
      Message.error({
        message: success.data.msg,
        showClose: true
      })
      return
    }
    if (success.data.msg) {
      Message.success({
        message: success.data.msg,
        showClose: true
      })
    }
    return success.data
  },
  error => {
    if (error.response.status === 504 || error.response.status === 404) {
      Message.error({
        message: '服务器坏了',
        showClose: true
      })
    } else if (error.response.status === 403) {
      Message.error({
        message: '权限不足',
        showClose: true
      })
    } else if (error.response.status === 401) {
      Message.error({
        message: '尚未登录，请登录',
        showClose: true
      })
    } else {
      if (error.response.data.msg) {
        Message.error({ message: error.response.data.msg })
      } else {
        Message.error({ message: '未知错误!' })
      }
    }
  })

/* 地址 */
const base = 'http://localhost:3000'
export const postKeyValueRequest = (url, params) => {
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    transformRequest: [
      function (data) {
        console.log(data)
      }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

export const postRequest = (url, params) => {
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params
  })
}

export const putRequest = (url, params) => {
  return axios({
    method: 'put',
    url: `${base}${url}`,
    data: params
  })
}

export const getRequest = (url, params) => {
  return axios({
    method: 'get',
    url: `${base}${url}`,
    data: params
  })
}

export const deletRequest = (url, params) => {
  return axios({
    method: 'delete',
    url: `${base}${url}`,
    data: params
  })
}
