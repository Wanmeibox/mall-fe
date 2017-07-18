<template>
  <div class="shop">
    <comHeader></comHeader>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import comHeader from './components/com/header.vue'
  export default {
    data () {
      return {}
    },
    components: {
      comHeader: comHeader
    }
  }
</script>

<style lang="scss" scope>
  @import './css/base.scss'
</style>
