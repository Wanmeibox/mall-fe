<template>
  <ul class="mall-class">
    <li>
      <router-link :to="{ name: 'detail', params: {} }">
        <figure><img src="../../assets/shop.jpg" alt=""></figure>
        <h3>商品名称</h3>
        <div class="price">￥12</div>
        <p>商品简要描述</p>
      </router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    // data () {
    //
    // },
    created () {
      this.$store.dispatch('changeHeaderTitle', '商品类别')
      this.$store.dispatch('changeBackState', false)
      this.$store.dispatch('changeFooterState', true)
      // this.getData()
    },
    methods: {
      getData () {
        this.$axios.get('http://192.168.99.217:3000/api/goods/get?id=1').then((result) => {
          console.log(result)
          // this.dataCate = response.data
          // this.types = this.dataCate.data.types
          // this.allBrand = this.dataCate.data.allBrand
        }, () => {
          // error
        })
      }
    }
  }
</script>

<style lang="scss" scope>
  @import '../../css/base.scss';
  .mall-class {
    width: 100%;
    @include font-dpr(14px);

    li {
      height: rem(300px);
      line-height: rem(36px);
      background-color: #f8f8f8;
      padding: rem(18px) 0;
      margin-bottom: rem(20px);
      img {
        width: 100%;
      }

      figure {
        margin-bottom: rem(10px);
        text-align: center;
        height: rem(140px);
        overflow: hidden;
      }

      h3 {
        @include font-dpr(16px);
        line-height: rem(36px);
        color: #333;
      }

      p {
        color: #333;
      }

      .price {
        color: #ea3323;
      }
    }

    .footer-act {
      text-decoration: none;
      h3 {
        @include font-dpr(16px);
        line-height: rem(36px);
        color: #333;
      }

      p {
        color: #333;
      }

      .price {
        color: #ea3323;
      }
    }
  }
</style>
