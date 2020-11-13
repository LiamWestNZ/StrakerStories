<template>
  <div id="spinner">
    <CSpinner
      color="primary"
      style="width:4rem;height:4rem;"
    />
  </div>
</template>

<script>
import {CSpinner} from '@coreui/vue';
export default {
  name: 'Spinner',
  components: {
    CSpinner,
  },
}
</script>

<style scoped>
.spinner{
  margin-top: 20px;
}
</style>