import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex)

const state = {
  feeds: [],
  allFeeds: []
}

const actions = {
  fetchAllFeeds: ({ commit , dispatch, state }) => {
    if('caches' in window) {
      caches.match('https://readr.meetgodhani.com/api/feeds').then(function(response) {
        if(response) {
          response.json().then(function updateFromCache(res) {
            commit('SET_ALL_FEEDS', { res })
          })
        }
      })
    }
    Vue.http.get('https://readr.meetgodhani.com/api/feeds').then(res => commit('SET_ALL_FEEDS',{ res }))
  },
  fetchFeeds: ({ commit, dispatch, state }) => {
    if('caches' in window) {
      caches.match('https://readr.meetgodhani.com/api/users').then(function(response) {
        if(response) {
          response.json().then(function updateFromCache(res) {
            commit('SET_FEEDS',{ res })
          });
        }
      })
    }
    Vue.http.get('https://readr.meetgodhani.com/api/users').then(res => commit('SET_FEEDS',{ res }))
  },
  subscribeFeed: ({ commit, dispatch, state }, id ) => {
    Vue.http.post('https://readr.meetgodhani.com/api/feeds/subscribe/' + id).then(res => {
      commit('SUBSCRIBE_FEED',{ id })
    })
  },
  unsubscribeFeed: ({ commit, dispatch, state }, id ) => {
    Vue.http.post('https://readr.meetgodhani.com/api/feeds/unsubscribe/' + id).then(res => {
      commit('UNSUBSCRIBE_FEED', { id })
    })
  }
}

const mutations = {
  SET_FEEDS: (state, { res }) => {
    state.feeds = res.data ? res.data.feeds : res.feeds
  },
  UNSUBSCRIBE_FEED: (state, { id }) => {
    let allindex = _.findIndex(state.allFeeds, [ 'id', id ])
    let current = _.findIndex(state.feeds, ['id', id])
    state.feeds.splice(current, 1)
    state.allFeeds[allindex].subscribed = false
  },
  SUBSCRIBE_FEED: (state, { id }) => {
    let allindex = _.findIndex(state.allFeeds, [ 'id', id ])
    state.feeds.unshift(state.allFeeds[allindex])
    state.allFeeds[allindex].subscribed = true
  },
  SET_ALL_FEEDS: (state, { res }) => {
    state.allFeeds = res.data ? res.data : res
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
