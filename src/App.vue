<template>
  <div :class="['shop', {padd: showHeader}]">
    <comHeader></comHeader>
    <router-view></router-view>
    <comFooter></comFooter>
  </div>
</template>

<script type="text/ecmascript-6">
  import comHeader from './components/com/header.vue'
  import comFooter from './components/com/footer.vue'
  export default {
    data () {
      return {}
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
  @import './css/calcuterem.scss';
  .padd {
    padding-top: rem(80px);
  }
</style>
