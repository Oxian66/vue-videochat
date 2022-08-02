import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router';
import WebRTC from 'vue-webrtc'
import './index.css'
import router from './router'
import store from './store'

Vue.use(require('vue-script2'))
Vue.use(Router);
Vue.use(WebRTC)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
