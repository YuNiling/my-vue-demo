// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入store
import store from './vuex/store'
import Table from '@/components/Table'

Vue.config.productionTip = false

// 全局注册组件
Vue.component('Table', Table)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // 全局注入
  components: { App },
  template: '<App/>'
})
