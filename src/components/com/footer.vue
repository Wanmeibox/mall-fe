<template>
  <div class="footer" flex="box:mean">
    <router-link class="footer-item" v-for="(item, index) in taps" :key="index" :to="{ name: item.goname, params: {}, activeClass: 'footer-active' }">
      <div :class="['iconfont', item.classname]"></div>
      <span>{{item.infoname}}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      taps: [
        {goname: 'index', classname: 'icon-shouye', infoname: '首页'},
        {goname: 'class', classname: 'icon-yuanjiaojuxing', infoname: '分类'},
        {goname: 'cart', classname: 'icon-gouwuche', infoname: '购物车'},
        {goname: 'center', classname: 'icon-wode', infoname: '我的'}
      ]
    }
  },
  computed: {
    headerTitle () {
      return this.$store.getters.getHeaderTitle
    }
  },
  methods: {
    showSideBar () {
      return this.$store.dispatch('changeSideBarState', true)
    },
    hideSideBar () {
      return this.$store.dispatch('changeSideBarState', false)
    },
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scope>
  @import '../../css/calcuterem.scss';
  @import url('//at.alicdn.com/t/font_wbl9xael1jgx2yb9.css');
  .footer {
    position: fixed;
    background-color: #f6f6f6;
    bottom: 0;
    z-index: 100;
    // height: rem(96px);
    width: rem(750px);
    margin: 0 auto;
    font-size: rem(24px);
    text-align: center;
    .footer-item {
      color: #777;
    }
    span {
      line-height: 26px;
    }
    div {
      font-size: rem(40px);
      line-height: rem(70px);
    }

    .footer-act {
      text-decoration: none;
      color: #777;
      div {
        color: #fdd000;
      }
    }
  }
</style>
