<template>
  <div>
    <!-- <home-header :city='city'></home-header> -->
    <home-header></home-header>
    <home-swiper :swiperList='swiperList'></home-swiper>
    <home-icons :iconList='iconList'></home-icons>
    <home-recommend :recommendList='recommendList'></home-recommend>
    <home-weeked :weekedList='weekedList'></home-weeked>
  </div>
</template>
<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeWeeked from "./components/Weeked";
import { getHomeMultidata } from "@/request/home";
import { mapState } from 'vuex'
export default {
  name: "Home",
  data() {
    return {
      // city:'',  //不需要传递了，使用vuex
      iconList: [],
      recommendList: [],
      swiperList: [],
      weekedList: [],
      lastCity:''
    };
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeeked
  },
  mounted() {
    this.lastCity = this.city
    this.getHomeInfo();
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo() {
      getHomeMultidata({city:this.city}).then(res => {
        // this.city = res.data.city
        this.iconList = res.data.iconList;
        this.recommendList = res.data.recommendList;
        this.swiperList = res.data.swiperList;
        this.weekedList = res.data.weekedList;
      });
    }
  },
  activated() {
    if(this.lastCity !==this.city){
      this.lastCity = this.city
      this.getHomeInfo()
    }
  },
};
</script>
<style lang='stylus' scoped></style>
