<template>
  <div class="mall-index">
    <comSwiper></comSwiper>
    <div class="shop-list">
      <dl class="shop-item">
        <dt><img src="http://ohe5avf3y.bkt.clouddn.com/pro/vue/vue-shop/vue-proj-ban.webp" alt=""></dt>
        <dd>
          <h3>商品主要名称或者其他</h3>
          <span>商品描述或者其他</span>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
  import comSwiper from '../com/swiper.vue'
  export default {
    // data () {
    //
    // },
    created () {
      this.$store.dispatch('changeHeaderTitle', '首页')
      this.$store.dispatch('changeBackState', false)
      this.$store.dispatch('changeFooterState', true)
    },
    components: {
      comSwiper
    }
  }
</script>

<style lang="scss" scope>
  @import '../../css/calcuterem.scss';
  .shop-list {
    padding: rem(20px) 0;
    width: 100%;
  }

  .shop-item {
    background-color: #fff;

    dt {
      img {
        width: 100%;
      }
    }

    dd {
      padding: rem(14px) rem(20px) rem(24px);
      line-height: rem(50px);
      color: #222;

      h3 {
        font-size: rem(32px);
        font-weight: bold;
      }
      span {
        color: #5073cd;
        font-size: rem(28px);
      }
    }
  }
</style>
