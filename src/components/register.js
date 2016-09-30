import Vue from 'vue'
import NavBar from './navbar.vue'

export default {
  registerGlobalComponents() {
    Vue.component('navbar', NavBar)
  }
}
