import Vue from 'vue'
import { Loading } from 'vux'
const loadin = () => {
  let loadingCount = 0
  let dom = null
  const create = () => {
    const el = document.createElement('div')
    document.querySelector('body').appendChild(el)
    return el
  }
  // 显示loading
  const show = () => {
    if (loadingCount === 0) {
      dom = create()
      const vm = new Vue({
        el: dom,
        component: {Loading}
      })
      console.log(vm)
    }
    loadingCount++
  }

  // 销毁loading
  const hide = () => {
    if (loadingCount === 1) {
      document.querySelector('body').removeChild(dom)
    }
    loadingCount--
  }

  return {
    show,
    hide,
    loadingCount
  }
}

export default loadin()
