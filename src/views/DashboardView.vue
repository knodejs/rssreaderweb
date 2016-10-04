<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header  mdl-layout--fixed-tabs">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">All</span>
        <div class="mdl-layout-spacer"></div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right">
          <label class="mdl-button mdl-js-button mdl-button--icon" for="fixed-header-drawer-exp">
            <i class="material-icons">search</i>
          </label>
          <div class="mdl-textfield__expandable-holder">
            <input class="mdl-textfield__input" type="text" name="sample" id="fixed-header-drawer-exp">
          </div>
        </div>
      </div>
    </header>
    <div class="mdl-layout__drawer readr-drawer">
      <span class="mdl-layout-title">
        <span>Meet Godhani</span>
      </span>
      <nav class="mdl-navigation">
        <a class="mdl-navigation__link" href="">Link</a>
        <a class="mdl-navigation__link" href="">Link</a>
      </nav>
    </div>
    <main class="mdl-layout__content">
      <div class="page-content">
        <div class="article-list">
          <ul>
            <li class="news-item" v-for="article in articles" @click="navigateToArticle(article.id)">
              <div class="title">
                {{ article.title }}
              </div>
              <div class="meta">
                <img v-bind:src="article.feed.favicon" width="15" height="15" v-bind:alt="article.feed.title">
                <span class="author">{{ article.feed.title }} |</span>
                <span class="timeago">{{ article.published_at }}</span>
              </div>
            </li>
          </ul>
          <infinite-loading :on-infinite="onInfinite" spinner="spiral" ref="InfiniteLoading">
            <span slot="no-more">
              There is no articles available.
            </span>
          </infinite-loading>
        </div>
        <div class="subscribebtn-container">
          <button @click="showModal" class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
            <i class="material-icons">add</i>
          </button>
        </div>
      </main>
    </div>
  </template>
  <script>
  import InfiniteLoading from 'vue-infinite-loading';
  import moment from 'moment-timezone';

  export default {
    data() {
      return {
        articles: [],
        url: null,
        page: 1
      }
    },
    components: {
      InfiniteLoading
    },
    mounted(){
      componentHandler.upgradeElements(this.$el)
    },
    methods: {
      navigateToArticle(id) {
        return this.$router.push('/article/' + id);
      },
      showModal() {
        return this.$router.push('/subscribe')
      },
      addFeed() {
        const self = this;
      },
      onInfinite() {
        const self = this;

        var url = "https://readr.meetgodhani.com/api/articles?page=" + self.page;

        if('caches' in window) {
          caches.match(url).then(function(response) {
            if(response) {
              response.json().then(function updateFromCache(json) {
                if(json.length > 0) {
                  self.articles = self.artiles.concat(json);
                  self.page++
                  self.$refs.InfiniteLoading.$emit('$InfiniteLoading:loaded');
                } else {
                  self.$refs.InfiniteLoading.$emit('$InfiniteLoading:complete');
                }
              });
            }
          })
        }

        this.$http.get('https://readr.meetgodhani.com/api/articles', {
          params: {
            page: self.page
          }
        }).then((res) => {
          if(res.data.length > 0) {
            var resdata = res.data.map((item) => {
              item.published_at = moment.tz(item.published_at,"America/Toronto").fromNow();
              return item;
            });
            self.articles = self.articles.concat(resdata);
            self.page++;
            self.$refs.InfiniteLoading.$emit('$InfiniteLoading:loaded');
          } else {
            self.$refs.InfiniteLoading.$emit('$InfiniteLoading:complete');
          }
        })
      }
    }
  }
  </script>
  <style lang="scss">

  .readr-drawer {
    border-right: 0px;
    .mdl-layout-title {
      position:relative;
      background:#311B92;
      height:150px;
      color:white;
      span {
        position:absolute;
        bottom: 20px;
      }
    }
  }

  .subscribebtn-container {
    position:fixed;
    bottom:25px;
    right:20px;
  }

  .mdl-dialog-container {
    .mdl-dialog {
      max-width: 310px;
    }
  }

  .page-content {
    padding-top:10px;
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    .article-list {
      position:absolute;
      margin: 20px 0;
      width: 100%;
      transition: all .5s cubic-bezier(.55,0,.1,1);
      ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        .news-item {
          background-color: #fff;
          cursor: pointer;
          padding: 20px;
          border-bottom:1px solid #eee;
          position:relative;
          line-height: 25px;
          .title {
            font-size: 1em;
            font-weight:700;
            line-height: 20px;
          }
          .meta {
            line-height: 25px;
            margin-top:5px;
            img {
              margin-right: 5px;
            }
            .author {
              margin-left: 5px;
              font-weight: 100;
              font-size: 0.95em;
            }
            .timeago {
              font-weight: 100;
              font-size: 0.95em;
            }
          }
        }
      }
    }
  }
  </style>
