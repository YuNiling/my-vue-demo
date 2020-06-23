<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <!-- 添加子路由导航 -->
    <p>
      导航：
      <router-link to="/">首页</router-link>
      <router-link to="/oneother">子页面1</router-link>
      <router-link to="/home/two/1/张三">子页面2</router-link>
      <router-link :to="{name: 'three', params: {id: 3,name: '王五'}}">子页面3</router-link>
      <router-link to="/count">vuex页面</router-link>
      <router-link to="/manage/archiveManage">table页面</router-link>
    </p>
    <!-- 子页面展示部分 -->
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Home Page!'
    }
  },
  methods: {
    toThreePage () {
      this.$router.push({
        name: 'three',
        params: {
          id: 2,
          name: '李四'
        }
      })
    }
  }
}
</script>

<style scoped>
/* 页面切换动画 */
/* 进入过渡的结束状态，元素被插入时就生效，在过渡过程完成后移除 */
.fade-enter-active {
  transition: opacity .5s;
}
/* 进入过渡的开始阶段,元素被插入时生效,只应用一帧后立刻移除 */
.fade-enter {
  opacity: 0;
}
/* 离开过渡的开始状态,元素被删除时触发,只应用一帧后立刻删除 */
.fade-leave {
  opacity: 1;
}
/* 离开过渡的结束状态,元素被删除时生效,离开过渡完成后被删除 */
.fade-leave-active {
  opacity: 0;
  transition:opacity .5s;
}
</style>
