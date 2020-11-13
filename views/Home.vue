<template>
  <div id="Home">
    <Users/>
  </div>
</template>

<script>

import Users from '../components/Users'

export default {
  name: 'Home',
  components: {
    Users,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f0f4f7;
  height: 1000px;
  
}
body{
  background-color: #f0f4f7
}
</style>

