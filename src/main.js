import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

import { postKeyValueRequest, postRequest, getRequest, putRequest, deleteRequest } from './utils/api'

Vue.prototype.postRequest = postRequest
Vue.prototype.postKeyValueRequest = postKeyValueRequest
Vue.prototype.putRequest = putRequest
Vue.prototype.deleteRequest = deleteRequest
Vue.prototype.getRequest = getRequest

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
