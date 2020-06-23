<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <h2>{{$route.params.username}}</h2>
  </div>
</template>

<script>
export default {
  name: 'One',
  data () {
    return {
      msg: 'Hi, I am One Page!'
    }
  }
}
</script>

<style scoped>
</style>
