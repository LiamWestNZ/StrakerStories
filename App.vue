<template>
  <div id="app">
    <Container>
      <Header/>
        <Content>
          <router-view/>
        </Content>
      <Icons />
    </Container>
  </div>
  
</template>


<script>

import Header from './components/layout/Header'
import Content from './components/layout/Content'
import Icons from './components/layout/Icons'
import Container from './components/layout/Container'
export default {
  name:'app',
  components: {
    Header,
    Content,
    Icons,
    Container,
  }
}
</script>
<style>
#app {
  font-family: Courier New, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}

</style>
