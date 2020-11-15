<template>
  <div id="usersPosts">
    <Breadcrumb />
      <UsersPosts />
</div>


</template>



<script>

import UsersPosts from '../components/UsersPosts'
import Breadcrumb from '../components/layout/breadcrumb'

export default {
  name: 'usersPosts',
  components: {
    UsersPosts,
    Breadcrumb,
  },
}
</script>

<style>
</style>