import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import ('@/views/index/index');

Vue.use(Router)
export default new Router({
  routes: [
    {path: '/', name: 'index', component: Index, meta: {title: '首页'}},
  ]
})
