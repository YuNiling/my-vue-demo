<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ count }}</h2>
    <h2>{{ $store.state.count }}</h2>
    <button @click="add">新增</button>
    <!-- <button @click="ADD">+</button> -->
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  data () {
    return {
      msg: 'Vuex test!'
    }
  },
  // computed: {
  //   // 获取state值
  //   count () {
  //     return this.$store.getters.count
  //   }
  // },
  // computed: mapState({
  //   count: state => state.count
  // }),
  // computed: mapState(['count']),
  // computed: mapState({
  //   count: 'count'
  // }),
  methods: {
    // add () {
    //   // 分发action中的add方法
    //   this.$store.dispatch('add')
    // }
    ...mapActions(['add'])
  },
  computed: {
    ...mapGetters(['count'])
  }
  // methods: mapMutations([
  //   'ADD'
  // ])
}
</script>

<style>
</style>
