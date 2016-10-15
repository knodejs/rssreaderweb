<template>
  <transition name="fade">
    <router-view></router-view>
  </transition>
</template>
<script>
import {mapActions} from 'vuex'

export default {
  created() {
    if(localStorage.token) {
      this.fetchFeeds()
      this.fetchAllFeeds()
    }
  },

  methods: mapActions([
    'fetchFeeds',
    'fetchAllFeeds'
  ])
}
</script>
<style lang="scss">
@import "../node_modules/material-design-icons/iconfont/material-icons.css";
@import "../node_modules/material-design-lite/src/material-design-lite";
@import "./assets/scss/main";

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

body {
  background-color: #f2f3f5;
  font-family: 'Roboto', sans-serif;
}
</style>
