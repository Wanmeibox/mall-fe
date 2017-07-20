import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headerState: ((/micromessenger/gi).test(navigator.userAgent)) || ((/alipay/gi).test(navigator.userAgent)),
    backState: false,
    headerTitle: '小盒子购物口水站地'
  },
  mutations: {
    changeHeaderState (state, val) {
      state.headerState = val
    },
    changeBackState (state, val) {
      state.backState = val
    },
    changeHeaderTitle (state, val) {
      state.headerTitle = val
    }
  },
  actions: {
    changeHeaderState ({commit}, status) {
      commit('changeHeaderState', status)
    },
    changeBackState ({commit}, status) {
      commit('changeBackState', status)
    },
    changeHeaderTitle ({commit}, status) {
      commit('changeHeaderTitle', status)
    }
  },
  getters: {
    getHeaderState (state) {
      return state.sideBarState
    },
    getBackState (state) {
      return state.backState
    },
    getHeaderTitle (state) {
      return state.headerTitle
    }
  }
})
