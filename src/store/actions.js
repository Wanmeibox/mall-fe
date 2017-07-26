export default {
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
  },
  showLoading ({commit}) {
    commit('showLoading')
  },
  hideLoading ({commit}) {
    commit('hideLoading')
  }
}
