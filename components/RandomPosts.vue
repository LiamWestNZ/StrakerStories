<template>
  <div id="usersPosts">

      <h2>{{name}}'s posts</h2>

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
          name: undefined,
      }
    },
  mounted () {
      this.id = this.$route.params.id
      this.name = this.$route.params.posterName
      axios
            .get(`https://jsonplaceholder.typicode.com/posts?userId=${this.id}`)
            .then(response => (this.posts = response.data))
            .then(this.loading = false)
    }
}
</script>

<style>
#mainPostCard{
  margin: auto;
  height: 900px;
  width: 1000px;
  border-radius: .25rem;
  background-color: #fff;
  border: 1px solid #d8dbe0;
  margin-top: 10px;
  color: black;
}
hr{
  margin-top: 20px;
  margin-left: 30px;
  margin-right: 30px;
}
#spinnerDiv{
  margin-top: 100px;
}
</style>