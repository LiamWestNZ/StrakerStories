<template>
  <div id="Home">
    <Breadcrumb />
    <Users/>
  </div>
</template>

<script>

import Users from '../components/Users'
import Breadcrumb from '../components/layout/breadcrumb'

export default {
  name: 'Home',
  components: {
    Users,
    Breadcrumb,
  }
}
</script>

<style>
#app {
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

