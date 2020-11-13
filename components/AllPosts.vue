<template>
  <div id="usersPosts">

      <h2>All posts</h2>

      <div v-if="loading == true">
      <Spinner/>
        </div>
    <div v-else v-for="item in posts" v-bind:key="item.id">
            <div id="postCard">
                <router-link :to="{ name: 'post', params: { id: item.id }}">
                <p>"{{item.title}}"</p>
                <p style="font-size:12px;">Read more...</p>
                </router-link>
            </div>
    </div>

  </div>
</template>



<script>
import axios from 'axios'
import Spinner from './layout/Spinner'
export default {
  name: 'usersPosts',
  components: {
    Spinner,
  },
  data () {
      return {
          loading: true,
          posts: undefined,
          id: null,
      }
    },
  mounted () {
      axios
            .get(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => (this.posts = response.data))
            .then(this.loading = false)
    }
}
</script>

<style>
#postCard{
    margin: auto;
    background-color: white;
    width: 30%;
    border-radius: .25rem;
    background-color: #fff;
    border: 1px solid #d8dbe0;
    margin-top: 10px;
}
hr{
    margin-top: 10px;
}
</style>