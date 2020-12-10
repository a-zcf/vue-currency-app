import axios from 'axios'
import store from '../store/store'
import * as types from '../store/types'
import Qs from 'qs'
const query = Qs.parse(location.search.substring(1)) // 获取url链接参数
const baseUrl = process.env.API_ROOT // 打包后的域名
const red_url = baseUrl+'frontpage/h5login/login?redirect_url=' // 登陆地址url
axios.defaults.withCredentials = false
axios.interceptors.request.use(config => {
  store.commit(types.LOGIN, query.token); // 保存token
  config.data = JSON.stringify(config.data)
  config.headers = {
    'Content-Type': 'application/json;charset=UTF-8'
  }
  if (store.state.token) {
    config.headers.accessToken = `${store.state.token}`;
  }
  return config
},
err => {
  return Promise.resolve(err)
})

axios.interceptors.response.use(response => {
  if (response.data.code === 0) {
    return response
  } else if (response.data.code === 1000) {
    let url = location.href
    store.commit(types.LOGOUT)
    Toast.fail(response.data.msg);
    window.location.href = red_url + url
  } else {

  }
  return response
},
error => {
  if(error.response){
    switch (error.response.data.code) {
      case 101:
        console.log('您还未参与活动!');
        break
      case 102:
        console.log('账号不存在!');
        break
      case 103:
        console.log('账号已被使用!');
    }
  }
    return Promise.reject(error.response.data)
})
let base = Api.base
export const postRequest = (url, params) => {
  return axios({
    method: 'post',
    url: `${baseUrl}${url}`,
    data: params,
    dataType: 'jsonp',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}
export const getRequest = (url,params) => {
  return axios({
    method: 'get',
    params:params,
    url: `${baseUrl}${url}`,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
