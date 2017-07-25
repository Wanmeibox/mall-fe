<template>
  <div class="mall-header" v-show="showHeader">
    <div v-show="showBack" class="back iconfont icon-back" @click="goback">返回</div>
    <h4>{{headerTitle}}</h4>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    headerTitle () {
      return this.$store.getters.getHeaderTitle
    },
    showBack () {
      return this.$store.getters.getBackState
    },
    showHeader () {
      return !this.$store.getters.getHeaderState
    }
  },
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scope>
  @import '../../css/base.scss';
  @import url('//at.alicdn.com/t/font_msyoyeibkai3sor.css');
  .mall-header {
    position: fixed;
    top: 0;
    z-index: 100;
    height: rem(80px);
    line-height: rem(80px);
    width: rem(750px);
    color: #fff;
    background-color: #000;
    @include font-dpr(16px);
    text-align: center;
    padding: 0 rem(30px);

    .back {
      position: absolute;
      top: 0;
      left: rem(30px);
      height: 100%;
    }
  }
</style>
