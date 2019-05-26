import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    deviceTypes: ['NO', 'NX'],
    requestTypes: ['XCHG', 'CARD', 'CRED', 'ACNT'],
    currentRequestID: null
  },
  getters: {
    getCurrentRequestID(state) {
      return state.currentRequestID
    },
    getRequestTypes(state) {
      return state.requestTypes
    }
  },
  mutations: {
    setCurrentRequestID(state, payload) {
      state.currentRequestID = payload
    }
  }
})

export default store
