<template>
<div id="posts">

  <div id="spinnerDiv" v-if="loading == true">
      <Spinner/>
    </div>
  <div v-else>
    <div id="mainPostCard">
      <h5 class="mt-0">"{{post.title}}"</h5>
      <hr>
      <p>
        {{post.body}}
      </p>
    </div>
  </div>
</div>
  

</template>



<script>
import axios from 'axios'
import Spinner from './layout/Spinner.vue'
export default {
  name: 'posts',
  components: {
    Spinner,
  },
  data () {
      return {
          loading: true,
          post: undefined,
          id: null
      }
    },
  mounted(){
    this.id = this.$route.params.id
    axios
            .get(`https://jsonplaceholder.typicode.com/posts?id=${this.id}`)
            .then(response => (this.post = response.data[0]))
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