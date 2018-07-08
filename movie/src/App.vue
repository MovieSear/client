<template>
  <div id="app">
    <el-scrollbar style="height:100%">
      <router-view></router-view>
    </el-scrollbar>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
        return {

        }
    },
  }
</script>

<style>
html {
  height: 100%;
}
body {
  margin: 0;
  height: 100%;
  background: #E5E9F2;
  overflow-y: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>