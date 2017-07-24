<template>
  <li class="cart-item" flex="cross:center">
    <div class="select-cart iconfont icon-weixuanzhong" flex-box="0"></div>
    <div class="shop-img" flex-box="0"><img src="../../assets/shop.jpg" alt=""></div>
    <div class="shop-info" flex-box="1">
      <h3>产品名称</h3>
      <div class="shop-price"><strong>￥300</strong></div>
    </div>
    <div class="add-del" flex-box="0"><inline-x-number class="x-num" :min="0" :max="3" button-style="round" @on-change="change"></inline-x-number></div>
  </li>
</template>

<script>
  import { InlineXNumber } from 'vux'
  export default {
    // data () {
    //
    // },
    components: {
      InlineXNumber
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
  @import url('//at.alicdn.com/t/font_cf2g0jtuzgxpqfr.css');

  .cart-item {
    color: #4d4d4d;
    padding-right: rem(30px);

    .x-num {
      color: red;
    }

    .select-cart {
      font-size: rem(46px);
      margin-right: rem(32px);
    }

    .shop-img {
      margin-right: rem(42px);
    }

    .shop-info {
      line-height: rem(58px);
      margin-right: rem(10px);
    }

    .shop-price {
      color: #ff4891;
    }
  }
</style>
