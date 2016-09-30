import Vue from 'vue'
import App from './App'
import router from './router'
import VueMdl from 'vue-mdl'
import VueTransformDom from 'vue-transfer-dom'
import 'material-design-lite/material.js'
import registerComponent from './components/register.js'

registerComponent.registerGlobalComponents()

Vue.use(VueMdl);
Vue.use(VueTransformDom);

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
