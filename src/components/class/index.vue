<template>
  <div class="mall-class">
    <span>类别页</span>
  </div>
</template>

<script>
  export default {
    // data () {
    //
    // },
    created () {
      this.$store.dispatch('changeHeaderTitle', '类别')
      this.$store.dispatch('changeBackState', false)
    }
  }
</script>

<style lang="scss" scope>
  @import '../../css/calcuterem.scss';
  .mall-class {
    padding: rem(20px);
    width: 100%;
  }
</style>
