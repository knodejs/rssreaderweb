<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header  mdl-layout--fixed-tabs">
    <header class="mdl-layout__header">
      <button class="mdl-layout-icon mdl-button mdl-js-button mdl-button--icon" @click="previousPage">
        <i class="material-icons">arrow_back</i>
      </button>
      <div class="mdl-layout-spacer"></div>
      <div class="mdl-layout__header-row">
        <div class="mdl-layout-spacer"></div>
        <nav class="mdl-navigation">
          <a class="mdl-navigation__link" v-bind:href="link" target="_blank"><i class="material-icons">open_in_browser</i></a>
          <a class="mdl-navigation__link" href="#"><i class="material-icons">done</i></a>
          <a class="mdl-navigation__link" href="#"><i class="material-icons">bookmark_border</i>
          </a>
        </nav>
      </div>
    </header>
    <div class="contentlayout-ribbon"></div>
    <main class="contentlayout-main mdl-layout__content">
      <div class="contentlayout-container mdl-grid">
        <div class="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
        <div class="article-contentview mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col" v-if="loaded">
          <h3 class="title">{{ title }}</h3>
          <div v-html="content"></div>
        </div>
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
      link: null,
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
      if('caches' in window) {
        caches.match('https://readr.meetgodhani.com/api/articles/' + id).then(function(response) {
          if(response) {
            response.json().then(function updateFromCache(json) {
              self.loaded = true
              self.title = json.title
              self.link = json.link
              self.content = json.content
            });
          }
        })
      }

      this.$http.get('https://readr.meetgodhani.com/api/articles/' + id).then((res) => {
        self.loaded = true
        self.title = res.data.title
        self.link = res.data.link
        self.content = res.data.content
      })
    }
  }
}
</script>
<style lang="scss">

.contentlayout-main {
  margin-top: -35vh;
  flex-shrink: 0;
}

.contentlayout-container {
  max-width: 1600px;
  width: calc(100% - 10px);
  margin: 0 auto;
}
.contentlayout-ribbon {
  width: 100%;
  height: 40vh;
  background-color:#4A148C;
  flex-shrink:0;
}
.articledetail-view{
  display:flex;
  padding-top:100px;
  justify-content: center;
  align-items: top;
  min-height: 100vh;
}
.article-contentview {
  border-radius: 2px;
  padding: 50px 36px;
  margin-bottom: 80px;
  blockquote {
    font-size: 20px;
    line-height: 1.3;
    font-style:none;
  }
  figure {
    margin: 0;
  }
  img {
    max-width: 100%;
    display: block;
    margin-top: 20px;
    margin-bottom: 20px;
    height: auto;
  }
  h2 {
    font-size:25px;
  }

  .title {
    font-size: 27px;
  }

  h3 {
    font-size: 20px;
    line-height:1.3;
    font-family:'Roboto', sans-serif;
    font-weight:500;
  }
}
</style>
