<template>
  <div id="usersPosts">
      <div v-if="loading == true">
        <Spinner/>
      </div>
      <div v-else>
        <div id="userDiv">
          <div id="userCard">
              <p id="userName"><ios-person-icon />{{name}}</p>
              <p id=userLocation><ios-map-icon />{{location}}<p>
                <div id="website" v-if="website"><ios-globe-icon />{{website}}</div>
                <div v-if="company">
                  <p id="company"><ios-business-icon />{{company}}</p>
                    <p id="catch">"{{catchPhrase}}"</p>

                </div>
          </div>
          
      </div>
        <div v-for="item in posts" v-bind:key="item.id">
              <div id="postCard">
                  <router-link :to="{ name: 'post', params: { id: item.id }}">
                  <p>"{{item.title}}"</p>
                  <p style="font-size:12px;">Read more...</p>
                  </router-link>
              </div>
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
          location: undefined,
          website: undefined,
          company: undefined,
          catchPhrase: undefined,
          bs: undefined,

      }
    },
  mounted () {
      this.id = this.$route.params.id
      this.name = this.$route.params.posterName
      this.location = this.$route.params.location
      this.website = this.$route.params.website
      this.location = this.$route.params.location
      this.company = this.$route.params.company
      this.catchPhrase = this.$route.params.catchPhrase
      this.bs = this.$route.params.bs
      axios
            .get(`https://jsonplaceholder.typicode.com/posts?userId=${this.id}`)
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
#userCard{
    margin: auto;
    background-color: white;
    width: 500px;
    border-radius: .25rem;
    background-color: #fff;
    border: 1px solid #d8dbe0;
    margin-top: 10px;
    align-content: left;
    
}

#userDiv{
  align-content: left;
}


.p{
    text-decoration: none;
}
#userName{
  float: left;
  margin-left: 3px;
  margin-top: 3px;
  position: absolute;
  color: black;
}

#userLocation{
  float: left;
  margin-left: 1px;
  margin-top: 40px;
  position: relative;
  color: black;
}

#website{
  float: right;
  right: 10px;
  top: -13px;
  position: relative;
  color: black;
}

#company{
  position: relative;
  bottom: -30px;
  color: black;
}

#catch{
  position: relative;
  bottom: -20px;
  left: -50px;
  color: grey;
}

#bs{
  position: relative;
  color: black;
}
</style>