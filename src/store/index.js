import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  feeds: [],
  currentFeed: 'All',
  currentFeedID: null
}

const actions = {
  fetchFeeds: ({ commit, dispatch, state }) => {
    if('caches' in window) {
      caches.match('https://readr.meetgodhani.com/api/users').then(function(response) {
        if(response) {
          response.json().then(function updateFromCache(res) {
            console.log(res)
            commit('SET_FEEDS',{ res })
          });
        }
      })
    }
    Vue.http.get('https://readr.meetgodhani.com/api/users').then(res => commit('SET_FEEDS',{ res }))
  },
  changeFeed: ({ commit, dispatch, state },{ title,id }) => {
    commit()
  }
}

const mutations = {
  SET_FEEDS: (state, { res }) => {

    state.feeds = res.data ? res.data.feeds : res.feeds
  },
  CHANGE_FEED: (state, { title, id }) => {
    state.currentFeed = title
    state.currentFeedID = id
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
