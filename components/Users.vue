<template>
  <div id="users">
      <div v-if="loading">
        <Spinner/>
        </div>
      <div v-else>
      <div id="userDiv"  v-for="item in users" v-bind:key="item.id">
      <router-link :to="{ name: 'UserPosts', params: { 
        id: item.id, posterName: item.name,
        website: item.website, location: item.address.city,
        company: item.company.name, catchPhrase: item.company.catchPhrase,
        bs: item.company.bs
        }}">
          <div id="userCard">
              <p id="userName"><ios-person-icon />{{item.name}}</p>
              <p id=userLocation><ios-map-icon />{{item.address.city}}<p>
                <div id="website" v-if="item.website"><ios-globe-icon />{{item.website}}</div>
                <div v-if="item.company">
                  <p id="company"><ios-business-icon />{{item.company.name}}</p>
                    <p id="catch">"{{item.company.catchPhrase}}"</p>
                    <p id="bs">{{item.company.bs}}</p>

                </div>
          </div>
      </router-link>
          
      </div>
      </div>
      
  </div>
</template>



<script>

import axios from 'axios'
import Spinner from './layout/Spinner'

export default {
  name: 'Users',
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
}

#userLocation{
  float: left;
  margin-left: 1px;
  margin-top: 40px;
  position: relative;
}

#website{
  float: right;
  right: 10px;
  top: -13px;
  position: relative;
}

#company{
  position: relative;
  padding: 10px;
  color: black;
}

#catch{
  position: relative;
  left: -50px;
  color: grey;
  bottom: -60px;
}

#bs{
  position: relative;
  color: black;
  bottom: 15px;

}
</style>