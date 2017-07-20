<template>
  <div class="mall-cart">
    <ul>
      <li>商品1</li>
      <li>商品2</li>
      <li>商品3</li>
    </ul>
  </div>
</template>

<script>
  export default {
    // data () {
    //
    // },
    created () {
      this.$store.dispatch('changeHeaderTitle', '购物车')
      this.$store.dispatch('changeBackState', false)
    }
  }
</script>

<style lang="scss" scope>
  @import '../../css/calcuterem.scss';
  .mall-cart {
    padding: rem(20px);
    width: 100%;
  }
</style>
