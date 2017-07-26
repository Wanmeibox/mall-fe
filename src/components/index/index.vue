<template>
  <div class="mall-index">
    <comSwiper :banners="banners" v-if="banners"></comSwiper>
    <subject :subjectList="subjectList" v-if="subjectList"></subject>
    <div class="" @click="getDetail">
      测试时
    </div>
  </div>
</template>

<script>
  import comSwiper from '../com/swiper.vue'
  import subject from '../com/subject.vue'
  export default {
    data () {
      return {
        banners: [],
        subjectList: []
      }
    },
    created () {
      this.$store.dispatch('changeHeaderTitle', '首页')
      this.$store.dispatch('changeBackState', false)
      this.$store.dispatch('changeFooterState', true)
      this.getIndexBanner()
      // this.getDetail()
    },
    components: {
      comSwiper,
      subject
    },
    methods: {
      getIndexBanner () {
        this.$axios.get('subject/getIndexBanner').then((result) => {
          console.log(result.data)
          this.banners = result.data.data
        }, () => {

        })
      },
      getDetail () {
        this.$axios.get('subject/getIndexSubject').then((result) => {
          console.log(result.data)
          this.subjectList = result.data.data
        }, () => {

        })
      }
    }
  }
</script>
