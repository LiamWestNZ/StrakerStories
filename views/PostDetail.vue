<template>
  <div id="posts">
    <Breadcrumb />
      <Posts />
</div>


</template>



<script>

import Posts from '../components/Posts.vue'
import Breadcrumb from '../components/layout/breadcrumb'

export default {
  name: 'post',
  components: {
    Posts,
    Breadcrumb,
  },
}
</script>

<style>
</style>