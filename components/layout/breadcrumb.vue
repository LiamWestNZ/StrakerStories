<template>
  <div id="breadcrumb">
    <CBreadcrumb :items="items"/>
  </div>
</template>

<script>
export default {
    name: 'breadcrumb',
  data () {
    return {
      items: [
        {
          text: 'Home',
        }
      ],
    }
  }
}
</script>

<style scoped>
#breadcrumb{
    margin-bottom: 30px;
}
</style>