import { getNewsList, getAskList, getJobsList } from '../api/index.js'

export default {
  async FETCH_NEWS({ commit }) {
    const response = await getNewsList()
    commit('SET_NEWS', response.data)
    return response
    // console.log("news::", data)
  },
  async FETCH_JOBS({ commit }) {
    const response = await getJobsList()
    commit('SET_JOBS', response.data)
    return response
    // console.log("jobs::", data)
  },
  async FETCH_ASK({ commit }) {
    const response = await getAskList()
    commit('SET_ASK', response.data)
    return response
    // console.log("ask::", data)
  },

}