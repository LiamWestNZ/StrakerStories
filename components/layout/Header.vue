<template>
  <CNavbar id="Navbar" sticky=sticky expandable="md" type="dark" color="primary">
    <router-link :to="{ name: 'Home'}"><CNavbarBrand><h3 id="title">TechPost</h3></CNavbarBrand></router-link>
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
#Navbar{
    box-shadow: 2px 0px 2px #ccc;
}
#title{
  text-decoration: bold;
}
</style>