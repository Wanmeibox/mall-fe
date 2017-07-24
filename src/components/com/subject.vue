<template>
  <div class="shop-list">
    <dl class="shop-item" v-for="(item, index) in subjectList" :key="index">
      <dt><img :src="item.ImagePath" alt=""></dt>
      <dd>
        <h3>{{item.Title}}</h3>
        <span>{{item.Content}}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
  export default {
    // data () {
    //   return {
    //     pics:
    //   }
    // },
    props: {
      subjectList: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="scss" scope>
@import '../../css/base.scss';
.shop-list {
  padding: rem(20px) 0;
  width: 100%;
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
}
</style>
