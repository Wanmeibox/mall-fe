import getters from './getter.js'
const state = {
  headerState: !(((/micromessenger/gi).test(navigator.userAgent)) || ((/alipay/gi).test(navigator.userAgent))),
  backState: false,
  headerTitle: '小盒子购物口水站地',
  footerState: true,
  loading: true
}

const mutations = {
  changeFooterState (state, val) {
    state.footerState = val
  },
  changeHeaderState (state, val) {
    state.headerState = val
  },
  changeBackState (state, val) {
    state.backState = val
  },
  changeHeaderTitle (state, val) {
    state.headerTitle = val
  },
  showLoading (state) {
    state.loading = true
  },
  hideLoading (state) {
    state.loading = false
  }
}

export default {
  getters,
  state,
  mutations
}
