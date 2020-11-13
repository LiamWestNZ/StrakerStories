import Vue from 'vue'
import App from './App.vue'
import router from './router'
import CoreuiVue from "@coreui/vue";
import 'bootstrap'; import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false

Vue.use(CoreuiVue);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
