import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue } from 'bootstrap-vue'
import VueTextareaAutosize from "vue-textarea-autosize";
import * as VueGoogleMaps from 'vue2-google-maps'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSilentbox from 'vue-silentbox'
import store from './store'

require('dotenv').config();


Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueTextareaAutosize);
Vue.use(VueSilentbox)

Vue.use(VueGoogleMaps, {
  load: {    
    key: `${process.env.VUE_APP_MAP_APIKEY}`,
    libraries: 'places',
  }
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
