<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header  mdl-layout--fixed-tabs">
    <header class="mdl-layout__header">
      <button class="mdl-layout-icon mdl-button mdl-js-button mdl-button--icon" @click="previousPage">
        <i class="material-icons">arrow_back</i>
      </button>
      <!-- <div class="mdl-layout__header-row">
      <div class="mdl-layout-spacer"></div>
    </div> -->
  </header>
  <main class="mdl-layout__content">
    <div class="articledetail-view" v-if="!loaded">
      <div class="mdl-spinner mdl-js-spinner is-active"></div>
    </div>
    <div class="article-content" v-if="loaded">
      <h3>{{ title }}</h3>
      <div v-html="content"></div>
    </div>
  </main>
</div>
</template>
<script>
import read from 'node-read'
import request from 'request'

export default {
  data() {
    return {
      title: null,
      content: null,
      loaded: false
    }
  },
  mounted(){
    componentHandler.upgradeElements(this.$el)
  },
  created() {
    this.fetchData(this.$route.params.id);
  },
  methods: {
    previousPage() {
      return this.$router.go(-1);
    },
    fetchData(id) {
      const self = this;
      this.$http.get('https://readr.meetgodhani.com/api/articles/' + id).then((res) => {
        self.loaded = true
        self.title = res.data.title
        self.content = res.data.content
      })
    }
  }
}
</script>
<style lang="scss">
.articledetail-view{
  display:flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.article-content {
  padding:25px;
  max-width: 800px;
  margin: 20px auto;
  position: relative;
  background: white;
  img {
    max-width: 100%;
    display: block;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    height: auto;
  }
  h2 {
    font-size:25px;
  }
  h3 {
    font-size: 20px;
    line-height:1.3;
    font-family:'Roboto', sans-serif;
    font-weight:500;
  }
}
</style>
