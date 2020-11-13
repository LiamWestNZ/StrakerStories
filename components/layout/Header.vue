<template>
  <CNavbar sticky=sticky expandable="md" type="dark" color="primary">
    <router-link :to="{ name: 'Home'}"><CNavbarBrand>Straker Stories</CNavbarBrand></router-link>
    <CCollapse :show="collapsed" navbar>
      <CNavbarNav>
        <router-link :to="{ name: 'AllPosts'}"><CNavItem>All Posts</CNavItem></router-link>
        <router-link :to="{ name: 'UserPosts'}"><CNavItem>All Users</CNavItem></router-link>
      </CNavbarNav>


    </CCollapse>
  </CNavbar>
</template>


<script>
export default {
    name: 'Header',
  data () {
    return {
      collapsed: false,
      sticky: true,
    }
  }
}
</script>

<style scoped>

</style>