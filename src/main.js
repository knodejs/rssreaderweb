import Vue from 'vue'
import App from './App'
import router from './router'
import VueMdl from 'vue-mdl'
import VueResource from 'vue-resource'
import store from './store'
import VueTransformDom from 'vue-transfer-dom'
import 'material-design-lite/material.js'
import registerComponent from './components/register.js'

registerComponent.registerGlobalComponents()

Vue.use(VueResource)
Vue.use(VueMdl)
Vue.use(VueTransformDom)


if(localStorage.token) {
  Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.token;
}

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
