import axios from 'axios'
import Api from '../api/api'
// import qs from 'qs'
axios.defaults.withCredentials = false
axios.interceptors.request.use(config => {
  config.data = JSON.stringify(config.data)
  config.headers = {
    'Content-Type': 'application/json;charset=UTF-8'
  }
  return config
},
err => {
  return Promise.resolve(err)
})

axios.interceptors.response.use(response => {
  if (response.data.code === '0001') {
    
  }
  return response
},
error => {
  if (error.response && error.response.data.code === '0001') {

    return Promise.reject(error.response.data)
  }
})
let base = Api.base
export const postRequest = (url, params) => {
  // const Token = store.state.token
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    dataType: 'jsonp',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
      // 'token': Token
    }
  })
}
export const getRequest = (url) => {
  return axios({
    method: 'get',
    url: `${base}${url}`,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
