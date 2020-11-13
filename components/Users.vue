<template>
  <div id="users">
      <div v-if="loading">
      <Spinner/>
        </div>
    <div id="userDiv" v-else v-for="item in users" v-bind:key="item.id">
    <router-link :to="{ name: 'UserPosts', params: { id: item.id, posterName: item.name}}">
        <div id="userCard">
            <p>{{item.name}}</p>
        </div>
    </router-link>
        
    </div>

  </div>
</template>



<script>

import axios from 'axios'
import Spinner from './layout/Spinner'
export default {
  name: 'users',
  components: {
    Spinner,
  },
  data () {
      return {
          loading: true,
          users: undefined
      }
    },
  mounted () {
      
      axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(response => (this.users = response.data))
            .then(this.loading = false)
    }
}


</script>

<style scoped>
#userDiv{
    margin: auto;
    background-color: white;
    width: 500px;
    border-radius: .25rem;
    background-color: #fff;
    border: 1px solid #d8dbe0;
    margin-top: 10px;
}

.p{
    text-decoration: none;
}
</style>