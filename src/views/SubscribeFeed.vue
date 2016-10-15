<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header  mdl-layout--fixed-tabs">
    <header class="mdl-layout__header">
      <button class="mdl-layout-icon mdl-button mdl-js-button mdl-button--icon" @click="previousPage">
        <i class="material-icons">arrow_back</i>
      </button>
      <div class="mdl-layout__header-row">
        <div class="mdl-layout-spacer"></div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right">
          <label class="mdl-button mdl-js-button mdl-button--icon" for="fixed-header-drawer-exp">
            <i class="material-icons">search</i>
          </label>
          <div class="mdl-textfield__expandable-holder">
            <input class="mdl-textfield__input" type="text" v-model="searchTerm" name="sample" id="fixed-header-drawer-exp">
          </div>
        </div>
      </div>
    </header>
    <main class="mdl-layout__content">
      <div class="page-content">
        <div class="article-list">
          <ul>
            <li class="news-item feed-item" v-for="feed in getAllFeeds" :key="feed.id">
              <p class="feed-title"><img v-bind:src="feed.favicon" width="20" height="20"> {{ feed.title }}</p>
              <p>{{ feed.description }}</p>
              <button v-if="!feed.subscribed" @click="subscribeFeed(feed.id)" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                Subscribe
              </button>
              <button v-if="feed.subscribed" @click="unsubscribeFeed(feed.id)" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                Unsubscribe
              </button>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>
<style lang="scss">
.search-container {
  padding-left:15px;
  width:100%;
}
.article-list {
  .feed-item {
    cursor: default !important;
    .feed-title {
      font-size: 18px;
      img {
        margin-right:10px;
      }
    }
    .subscribe-button {
      float:right;
      top: -35px;
    }
  }
}
</style>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  data() {
    return {
      feeds: null,
      searchTerm: null
    }
  },
  mounted(){
    componentHandler.upgradeElements(this.$el)
  },
  computed: {
    getAllFeeds() {
      const self = this
      if(this.searchTerm){
        return this.$store.state.allFeeds.filter((row) => {
          return Object.keys(row).some(function (key) {
           return String(row[key]).toLowerCase().indexOf(self.searchTerm) > -1
         })
        })
      }
      return this.$store.state.allFeeds
    }
  },
  methods: {
    previousPage() {
      return this.$router.go(-1);
    },
    ...mapActions([
      'subscribeFeed',
      'unsubscribeFeed'
    ])
  }
}
</script>
