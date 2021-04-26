import { getNewsList, getAskList, getJobsList } from '../api/index.js'

export default {
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

}