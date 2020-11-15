<template>
  <div id="users">
    <Breadcrumb />
      <Users />
</div>


</template>



<script>

import Users from '../components/Users.vue'
import Breadcrumb from '../components/layout/breadcrumb'

export default {
  name: 'allusers',
  components: {
    Users,
    Breadcrumb,
  },
}
</script>

<style>
</style>