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
  @import '../../css/calcuterem.scss';
  @import url('//at.alicdn.com/t/font_msyoyeibkai3sor.css');
  .mall-header {
    position: fixed;
    top: 0;
    z-index: 100;
    height: rem(80px);
    line-height: rem(80px);
    width: 100%;
    color: #fff;
    background-color: #000;
    font-size: rem(32px);
    text-align: center;

    .back {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
    }
  }
</style>
