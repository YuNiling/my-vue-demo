<template>
  <div id="app">
    <router-view/>
    <router-view name="a" class="left"/>
    <router-view name="b" class="right"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  background-color: #F2F4F7;
  padding: 0px 15px;
}

#app {
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  background-color: #fff;
}

.left,.right {
  float: left;
  width: 48%;
  text-align: center;
  border: 1px solid red;
}
</style>
