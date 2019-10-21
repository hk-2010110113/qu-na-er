<template>
  <div class="icons">
    <!-- 两层循环 -->
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "Icons",
  props:{
    iconList:{
      type:Array
    }
  },
  data() {
    return {
      swiperOption: {}
    };
  },
  computed: {
    pages() {
      // page数据共可以展示几页
      const pages = [];
      // const page = 0
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl'

.icons >>> .swiper-container {
  height: 0;
  padding-bottom: 50%;
}

.icons {
  margin-top .1rem
  .icon {
    position: relative;
    float: left;
    height: 0;
    width: 25%;
    padding-bottom: 25%;
    overflow: hidden;

    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;

      .icon-img-content {
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }

    .icon-desc {
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      text-align: center;
      color: $darkTextColor;
      ellipsis()
    }
  }
}
</style>
