import { createStore } from 'vuex'

export default createStore({
  state: {
    isLogined: false
  },
  getters: {
    getIsLogined(state){
      return state.isLogined
    }
  },
  mutations: {
    setIsLoginedToFalse(state){
      state.isLogined = false
    },
    setIsLoginedToTrue(state){
      state.isLogined = true
    },
  },
  actions: {
  },
  modules: {
  }
})
