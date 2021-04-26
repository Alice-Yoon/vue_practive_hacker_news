import { createStore } from 'vuex'
import { getNewsList, getAskList, getJobsList } from '../api/index.js'

export default createStore({
  state: {
    news: [],
    ask: [],
    jobs: []
  },
  mutations: {
    SET_NEWS(state, data) {
      state.news = data
    },
    SET_JOBS(state, data) {
      state.jobs = data
    },
    SET_ASK(state, data) {
      state.ask = data
    },
  },
  actions: {
    async FETCH_NEWS({ commit }) {
      const { data } = await getNewsList()
      commit('SET_NEWS', data)
      // console.log("news::", data)
    },
    async FETCH_JOBS({ commit }) {
      const { data } = await getJobsList()
      commit('SET_JOBS', data)
      // console.log("jobs::", data)
    },
    async FETCH_ASK({ commit }) {
      const { data } = await getAskList()
      commit('SET_ASK', data)
      // console.log("ask::", data)
    },

  },
  modules: {
  }
})
