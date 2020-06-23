<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <p>ID: {{ $route.params.id }}</p>
    <p>名称: {{ $route.params.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'Three',
  data () {
    return {
      msg: 'Hi, I am Three Page!'
    }
  }
}
</script>

<style>
</style>
