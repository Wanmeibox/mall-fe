<template>
  <div class="mall-center">
    <header>
      <div class="picenter head-bg"></div>
      <div class="picenter transforx self-pic"></div>
      <div class="login-info">你还未登录，请先登录！</div>
    </header>
    <group title="cell demo">
      <cell title="Vux" value="Cool" is-link></cell>
    </group>
  </div>
</template>

<script>
import Group from 'vux-components/group'
import Cell from 'vux-components/cell'

export default {
  components: {
    Group,
    Cell
  }
}
</script>

<style lang="scss" scope>
  @import '~vux/vux.css';
  @import '../../css/calcuterem.scss';
  @import '../../css/base.scss';
  @import '../../css/center.scss';
</style>
