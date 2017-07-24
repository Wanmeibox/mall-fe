<template>
  <div class="mall-cart">
    <div class="attation-cart">商家名称什么的</div>
    <ul class="cart-list">
      <shop></shop>
    </ul>
  </div>
</template>

<script>
  import shop from '../com/shop.vue'
  export default {
    // data () {
    //
    // },
    created () {
      this.$store.dispatch('changeHeaderTitle', '购物车')
      this.$store.dispatch('changeBackState', false)
      this.$store.dispatch('changeHeaderState', true)
    },
    components: {
      shop
    },
    methods: {
      change: function (val) {
        console.log(val)
      }
    }
  }
</script>

<style lang="scss" scope>
  @import '../../css/base.scss';
  @import '../../css/calcuterem.scss';

  .mall-cart {
    padding: rem(20px) 0;
    width: 100%;
    font-size: rem(28px);
    color: #4d4d4d;

    .attation-cart {
      padding: 0 rem(30px);
      height: rem(88px);
      line-height: rem(88px);
    }

    .cart-list {
      padding-left: rem(30px);
    }
  }
</style>
