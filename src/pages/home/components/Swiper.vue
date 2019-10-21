<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(list) in swiperList" :key="list.id">
          <img class="swiper-img" :src="list.imgUrl"/>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  components: {},
  props:{
    swiperList:{
      type:Array
    }
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        pagination: '.swiper-pagination'
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
      }
    }
  },
  computed: {},
  mounted () {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
  }
}
</script>
<style lang='stylus' scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background #fff
.wrapper
    width 100%
    height 0
    overflow hidden
    padding-bottom 31.25%
    .swiper-img
        width 100%
</style>
