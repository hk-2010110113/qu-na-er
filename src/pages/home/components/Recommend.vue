<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item" v-for="item in recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" class="item-img" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeRecommend",
  props:{
    recommendList:{
      type:Array
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.title {
  line-height: 0.8rem;
  margin-top: 0.2rem;
  background: #eee;
  text-indent: 0.2rem;
}

ul {
  padding: 0;
  margin: 0;

  .item {
    display: flex;
    overflow: hidden;
    height: 1.9rem;

    .item-img {
      width: 1.7rem;
      height: 1.7rem;
      padding: 0.1rem;
    }

    .item-info {
      flex: 1;
      min-width: 0;
      padding: 0.1rem;

      .item-title {
        font-size: 0.32rem;
        line-height: 0.54rem;
        ellipsis();
      }

      .item-desc {
        line-height: 0.4rem;
        color: #ccc;
        ellipsis();
      }

      .item-button {
        background: #ff9300;
        margin-top: 0.16rem;
        line-height: 0.44rem;
        color: #fff;
      }
    }
  }
}
</style>