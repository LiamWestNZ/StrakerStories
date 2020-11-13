import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import usersPosts from '../views/UserPosts.vue'
import PostDetail from '../views/PostDetail.vue'
import AllPosts from '../views/AllPosts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/:id',
    name: 'UserPosts',
    component: usersPosts,
  },
  {
    path: '/post/:id',
    name: 'post',
    component: PostDetail,
  },
  {
    path: '/posts', 
    name: 'AllPosts',
    component: AllPosts,
  }
]

const router = new VueRouter({
  routes
})

export default router
