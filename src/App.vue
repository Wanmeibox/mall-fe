<template>
  <div class="shop">
    <comHeader></comHeader>
    <transition :name="transitionName">
      <router-view :class="['v-page', {padd: showHeader}]"></router-view>
    </transition>
    <comFooter></comFooter>
  </div>
</template>

<script type="text/ecmascript-6">
  import comHeader from './components/com/header.vue'
  import comFooter from './components/com/footer.vue'
  export default {
    data () {
      return {
        transitionName: ''
      }
    },
    name: 'app',
    watch: {
      '$route': function (to, from) {
        const loc = {index: 1, class: 2, cart: 3, center: 1}
        // const toDepth = to.name.split('-').length
        // const formDepth = from.name.split('-').length
        this.transitionName = loc[to.name] < loc[from.name] ? 'page-slide-right' : 'page-slide-left'
      }
    },
    computed: {
      showHeader () {
        return !this.$store.getters.getHeaderState
      }
    },
    components: {
      comHeader: comHeader,
      comFooter: comFooter
    }
  }
</script>

<style lang="scss" scope>
  @import './css/base.scss';
  @import "./css/inout.scss";
  #app{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .v-page {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    opacity: 1;
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    transition: all .4s cubic-bezier(.55,0,.1,1);
    display: flex;
    flex-direction: column;
  }
  .padd {
    top: rem(80px);
  }
</style>
