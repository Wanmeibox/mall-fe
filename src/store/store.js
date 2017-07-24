import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headerState: ((/micromessenger/gi).test(navigator.userAgent)) || ((/alipay/gi).test(navigator.userAgent)),
    backState: false,
    headerTitle: '小盒子购物口水站地',
    footerState: true
  },
  mutations: {
    changeFooterState (state, val) {
      state.headerState = val
    },
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
    changeFooterState ({commit}, status) {
      commit('changeFooterState', status)
    },
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
    getFooterState (state) {
      return state.footerState
    },
    getHeaderState (state) {
      return state.headerState
    },
    getBackState (state) {
      return state.backState
    },
    getHeaderTitle (state) {
      return state.headerTitle
    }
  }
})
