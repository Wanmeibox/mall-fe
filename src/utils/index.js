import http from './http'
import loading from './loading'

export default {
  // 获取接口绝对路径
  api: (path) => {
    const baseurl = 'http://192.168.99.217:3000/api/'
    return baseurl + path
  },
  // 发送请求模块
  http,
  // 显示loading
  showLoading: () => {
    loading.show()
  },
  // 隐藏loading
  hideLoading: () => {
    loading.hide()
  }
}
