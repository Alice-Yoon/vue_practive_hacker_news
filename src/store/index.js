import { createStore } from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'

export default createStore({
  state: {
    news: [],
    ask: [],
    jobs: [],
    loading: false,
  },
  mutations,
  actions,
  // modules: {
  // }
})
