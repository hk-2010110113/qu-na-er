<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市景点</div>
    <!-- <div class="header-right">{{city}}<span class="iconfont arrow-icon">&#xe64a;</span></div> -->
    <router-link to="/city" tag="div" class="header-right">{{this.city}}<span class="iconfont arrow-icon">&#xe64a;</span></router-link>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'Header',
  computed: {
    ...mapState(['city'])
  },
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  display flex
  height $headerHeight
  line-height $headerHeight
  background $bgColor
  color #fff
  .header-left
    width .64rem
    float left
    .back-icon
      text-align center
      font-size .4rem
  .header-input
    flex 1
    margin-top .12rem
    height .64rem
    line-height .64rem
    margin-left .2rem
    padding-left .2rem
    background #ffffff
    border-radius .1rem
    color #ccc
  .header-right
    min-width 1.04rem
    padding 0 .1rem
    float right
    text-align center
    .arrow-icon
      margin-left -.04rem
      font-size .24rem
</style>
