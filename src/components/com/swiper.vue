<template>
  <div class="mall-swiper">
    <Swipe>
      <SwipeItem v-for="(item, index) in pics" :key="index"><img :src="item"/></SwipeItem>
    </Swipe>
  </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'vue-swipe'
  import 'vue-swipe/dist/vue-swipe.css'
  export default {
    data () {
      return {
        pics: ['http://ohe5avf3y.bkt.clouddn.com/pro/vue/vue-shop/vue-proj-ban.webp', 'http://ohe5avf3y.bkt.clouddn.com/pro/vue/vue-shop/vue-proj-ban.webp', 'http://ohe5avf3y.bkt.clouddn.com/pro/vue/vue-shop/vue-proj-ban.webp']
      }
    },
    components: {
      Swipe,
      SwipeItem
    }
  }
</script>

<style lang="scss" scope>
  @import '../../css/calcuterem.scss';
  .mall-swiper {
    height: rem(360px);
    width: rem(750px);

    img{
      width: rem(750px);
    }
  }
</style>
