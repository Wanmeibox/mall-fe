<template>
  <div class="mall-detail">
    <header class="detail-header">
      <div class="shop-pic" flex="cross:center">
        <figure flex-box="1"><img src="../../assets/shop.jpg" alt=""></figure>
      </div>
      <h3>{{detail.GoodsName}}</h3>
      <div class="shop-price">￥{{detail.Price}}</div>
    </header>
    <div class="one-detail">
      {{detail.Content}}
    </div>
    <div class="shop-add" flex="cross:center">
      <router-link :to="{ name: 'cart', params: {} }">
        <div class="cart-mark iconfont icon-gouwuche1"><badge class="badge" text="2"></badge></div>
      </router-link>
      <div class="one-price" flex-box="1">￥0</div>
      <div class="cartadd-btn"><span>添加商品：</span><inline-x-number class="x-num" :min="0" button-style="round" @on-change="change"></inline-x-number></div>
    </div>
  </div>
</template>

<script>
  import { InlineXNumber, Badge } from 'vux'
  export default {
    data () {
      return {
        detail: {}
      }
    },
    components: {
      InlineXNumber,
      Badge
    },
    created () {
      this.$store.dispatch('changeHeaderTitle', '商品详情')
      this.$store.dispatch('changeBackState', true)
      this.$store.dispatch('changeFooterState', false)
      this.getData()
    },
    methods: {
      change: function (val) {
        console.log(val)
      },
      getData () {
        this.$axios.http({
          url: this.$axios.api('goods/get?id=1')
        }).then((result) => {
          console.log(result)
          this.detail = result.data
        })
      }
    }
  }
</script>

<style lang="scss" scope>
  @import url('//at.alicdn.com/t/font_7pn5lp0p4z589f6r.css');
  @import '../../css/base.scss';
  .mall-detail {
    .detail-header {
      padding: rem(30px) rem(30px) 0;
      text-align: center;
      border-bottom: rem(10px) solid #f8f8f8;

      .shop-pic {
        height: rem(400px);
      }
    }
    .one-detail {
      padding: rem(30px) rem(30px) rem(110px);
      border-bottom: rem(10px) solid #f8f8f8;
    }
    .shop-add {
      position: fixed;
      background-color: #f6f6f6;
      bottom: 0;
      z-index: 100;
      height: rem(98px);
      width: rem(750px);
      margin: 0 auto;
      font-size: rem(24px);
      padding: 0 rem(24px);

      .cart-mark {
        color: #f8d74b;
        font-size: rem(104px);
        -webkit-transform: translate(0, -28%);
        transform: translate(0, -28%);
        position: relative;
        .badge{
          position: absolute;
          vertical-align: top;
          top: 0;
          left: rem(70px);
        }
      }

      .x-num {
        vertical-align: middle;
      }

      input {
        background-color: transparent;
      }
    }
  }
</style>
