<template>
  <div class="mall-center">
    <header>
      <div class="picenter head-bg"></div>
      <div class="picenter transforx self-pic"></div>
      <div class="login-info">你还未登录，请先登录！</div>
    </header>
    <group>
      <cell title="收货地址1" is-link>
        <div slot="icon" class="iconfont icon-shouye" style="font-size:20px;margin-right:6px;"></div>
      </cell>
      <cell title="收货地址2" is-link>
        <div slot="icon" class="iconfont icon-shouye" style="font-size:20px;margin-right:6px;"></div>
      </cell>
      <cell title="收货地址3" is-link>
        <div slot="icon" class="iconfont icon-shouye" style="font-size:20px;margin-right:6px;"></div>
      </cell>
    </group>
  </div>
</template>

<script>
import Group from 'vux-components/group'
import Cell from 'vux-components/cell'

export default {
  created () {
    this.$store.dispatch('changeHeaderTitle', '个人中心')
    this.$store.dispatch('changeBackState', false)
    this.$store.dispatch('changeFooterState', true)
  },
  components: {
    Group,
    Cell
  }
}
</script>

<style lang="scss" scope>
  @import '../../css/base.scss';
  @import '../../css/center.scss';
</style>
