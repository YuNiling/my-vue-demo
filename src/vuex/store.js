// 引入vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'

// 使用Vuex
Vue.use(Vuex)

// 1、state：创建初始化状态
const state = {
  // 放置初始状态
  count: 1
}

// 2、mutations：创建改变状态的方法
const mutations = {
  // 状态变更函数-一般大写
  ADD (state, n) {
    state.count += n
  }
}

// 3、getters：提供外部获取state
const getters = {
  count: function (state) {
    return state.count + 100
  }
}

// 4、actions：创建驱动方法改变mutations
// const actions = {
//   // 触发mutations种相应的方法-一般小写
//   add ({commit}, data) {
//     commit('ADD', data)
//   }
// }
const actions = {
  // 触发mutations种相应的方法-一般小写
  add ({commit}) {
    setTimeout(() => {
      commit('ADD')
    }, 3000)
    console.log('我比reduce提前执行')
  }
}

// 5、全部注入Store中
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

// 6、输出store
export default store
