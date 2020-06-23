// 引入axios
import axios from 'axios'
import util from '@/util/util'

// 创建axios实例
const httpService = axios.create({
  // baseURL: '',
  timeout: 3000
})

// request拦截器
httpService.interceptors.request.use(
  config => {
    // 根据条件加入token-安全携带
    let url = config.url
    let token = util.getParams(url).token
    if (token) {
      config.headers['User-Token'] = token
    }
    return config
  },
  error => {
    // 请求错误处理
    Promise.reject(error)
  }
)

// respone拦截器
httpService.interceptors.response.use(
  response => {
    // 统一处理状态
    const res = response.data
    if (res.code !== 200) {
      console.log(res)
      // 返回异常
      let message = ''
      switch (res.code) {
        case 400:
          message = '错误请求'
          break
        case 401:
          message = '未授权，请重新登录'
          break
        case 403:
          message = '拒绝访问'
          break
        case 404:
          message = '请求错误,未找到该资源'
          break
        case 405:
          message = '请求方法未允许'
          break
        case 408:
          message = '请求超时'
          break
        case 500:
          message = '服务器端出错'
          break
        case 501:
          message = '网络未实现'
          break
        case 502:
          message = '网络错误'
          break
        case 503:
          message = '服务不可用'
          break
        case 504:
          message = '网络超时'
          break
        case 505:
          message = 'http版本不支持该请求'
          break
        default:
          message = `未知错误${res.code}`
      }
      return Promise.reject(message)
    } else {
      return Promise.resolve(response.data)
    }
  },
  error => {
    return Promise.reject('请求失败')
  }
)

/*
 * get请求
 * url：请求地址
 * params：参数
 */
export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    httpService({
      url: url,
      method: 'get',
      params: params
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}

/*
 * post请求
 * url：请求地址
 * params：参数
 */
export function post (url, params = {}) {
  return new Promise((resolve, reject) => {
    httpService({
      url: url,
      method: 'post',
      data: params
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}

/*
 * 文件上传
 * url：请求地址
 * params：参数
 */
export function fileUpload (url, params = {}) {
  return new Promise((resolve, reject) => {
    httpService({
      url: url,
      method: 'post',
      data: params,
      headers: {
        'content-Type': 'multipart/form-data'
      }
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}

export default {
  get,
  post,
  fileUpload
}
