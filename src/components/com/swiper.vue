<template>
  <div class="mall-swiper">
    <Swipe>
      <SwipeItem v-for="(item, index) in banners" :key="index"><img :src="item.ImagePath"/></SwipeItem>
    </Swipe>
  </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'vue-swipe'
  import 'vue-swipe/dist/vue-swipe.css'
  export default {
    // data () {
    //   return {
    //     pics:
    //   }
    // },
    props: {
      banners: {
        type: Array,
        required: true
      }
    },
    components: {
      Swipe,
      SwipeItem
    }
  }
</script>

<style lang="scss" scope>
  @import '../../css/base.scss';
  .mall-swiper {
    height: rem(360px);
    width: rem(750px);

    img{
      width: rem(750px);
    }
  }
</style>
