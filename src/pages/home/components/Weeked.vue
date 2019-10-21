<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item in weekedList" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" class="item-img" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeWeeked",
  props:{
    weekedList:{
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
    .item-img {
      width: 100%;
      padding: 0.1rem;
    }

    .item-info {
      padding .1rem
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
    }
  }
}
</style>