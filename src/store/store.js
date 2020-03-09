import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    token: null
  },
  mutations: {
    [types.LOGIN]: (state, data) => {
      localStorage.token = data
      state.token = data
    },
    [types.LOGOUT]: (state) => {
      localStorage.removeItem('token')
      state.token = null
    }
  }
})
// 定义数据 state在vuex中用于存储数据
// var state = {
//   count: 1
// }
// 定义方法 mutations里面放的是方法，方法主要用于改变state里面的数据
// var mutations = {
//   incCount () {
//     ++state.count
//   }
// }
// 实例化 Vuex.store
// const store = new Vuex.Store({
//   state,
//   mutations: mutations
// })
// 暴露
// export default store
