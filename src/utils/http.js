import axios from 'axios'
// import loading from './loading.js'

export default (userCfg) => new Promise((resolve, reject) => {
  const _cfg = Object.assign({}, {
    url: '',
    data: {},
    isSuccessShow: true
  }, userCfg)

  function showMsg (msg, isSuccess) {
    return new Promise((_resolve) => {
      if (isSuccess) {
        if (_cfg.isSuccessShow) {
          _resolve()
        } else {
          _resolve()
        }
      } else {
        if (msg) {
          alert(msg)
        }
        _resolve()
      }
    }, () => {})
  }

  // loading.show()
  axios.get(_cfg.url).then((result) => {
    // loading.hide()
    console.log(result)
    if (result.data.success) {
      showMsg('success', true).then(() => {
        resolve(result.data)
      })
    } else {
      showMsg(result.data.message).then(() => {
        reject(result.data)
      })
    }
  }, (error) => {
    // loading.hide()
    console.log(error)
    showMsg('接口有误')
  })
})
