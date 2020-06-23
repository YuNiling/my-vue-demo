<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <p>ID: {{ $route.params.id }}</p>
    <p>名称: {{ $route.params.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'Two',
  data () {
    return {
      msg: 'Hi,I am Two Page!'
    }
  },
  // 进入页面前调用
  beforeRouteEnter (to, from, next) {
    console.log('进入enter路由钩子')
    next()
  },
  // 离开页面调用
  beforeRouteLeave (to, from, next) {
    console.log('进入leave路由钩子')
    next()
  },
  // 页面路由改变时调用
  beforeRouteUpdate (to, from, next) {
    console.log('进入update路由钩子')
    console.log(to.params.id)
    next()
  }
}
</script>

<style scoped>
</style>
