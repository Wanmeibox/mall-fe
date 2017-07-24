<template>
  <div class="mall-index">
    <comSwiper :banners="banners" v-if="banners"></comSwiper>
    <subject :subjectList="subjectList" v-if="subjectList"></subject>
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
      this.getDetail()
    },
    components: {
      comSwiper,
      subject
    },
    methods: {
      getIndexBanner () {
        this.$axios.http({
          url: this.$axios.api('subject/getIndexBanner')
        }).then((result) => {
          this.banners = result.data
        })
      },
      getDetail () {
        this.$axios.http({
          url: this.$axios.api('subject/getIndexSubject')
        }).then((result) => {
          this.subjectList = result.data
        })
      }
    }
  }
</script>
