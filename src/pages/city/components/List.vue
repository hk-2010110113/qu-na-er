<template>
  <div class="list wrapper">
    <div class="content">
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{currentCity}}</div>
          </div>
        </div>
      </div>

      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item in hotCities" :key="item.id">
            <div class="button" @click="handleCityClick">{{item.name}}</div>
          </div>
        </div>
      </div>

      <!-- 具体的城市 -->
      <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" @click="handleCityClick" v-for="ite in item" :key="ite.id">{{ite.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import {mapState,mapMutations} from 'vuex'
// import BScroll from "@better-scroll/core";
// import Pullup from "@better-scroll/pull-up";
// BScroll.use(Pullup);
export default {
  name: "CityList",
  props: {
    hotCities: {
      type: Array
    },
    cities:{
      type:Object
    },
    letter:{
      type:String
    }
  },
  data() {
    return {
      bs: null,
      target:'',
      ele:this.letter
    };
  },
  computed: {
    // city(){
    //   return this.$store.state.city
    // },
    ...mapState({
      currentCity:'city'
    })
  },
  mounted() {
    this.bscroll();
    this.getPosition();
  },
  methods: {
    bscroll() {
      this.bs = new BScroll(".list", {
        probeType: 3,
        pullUpLoad: true
      });
    },
    getPosition() {
      //监听滚动事件
      // this.bs.on("scroll", p => {
      //   console.log(p);
      // });
    },
    currentTarget(val){
      this.target = val;
    },
    handleCityClick(e){
      //this.$store.commit('increment',e.target.innerHTML)
      this.increment(e.target.innerHTML)
      this.$router.push('/')
    },
    ...mapMutations(['increment'])
  },
  watch:{
    letter(){
      if(this.letter){
        const eles = this.$refs[this.letter][0]  //获得当前节点
        this.bs.scrollToElement(eles,500)     
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.border-topbottom {
  &::before {
    border-color: #ccc;
  }

  &::after {
    border-color: #ccc;
  }
}

.list {
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.border-bottom {
  &::before {
    border-color: #ccc;
  }
}

.title {
  line-height: 0.54rem;
  color: #666;
  padding-left: 0.2rem;
  background: #eee;
  font-size: 0.26rem;
}

.button-list {
  overflow: hidden;
  padding: 0.1rem 0.6rem 0.1rem 0.1rem;

  .button-wrapper {
    float: left;
    width: 33.3%;

    .button {
      padding: 0.1rem 0;
      margin: 0.1rem;
      text-align: center;
      border: 0.02rem solid #ccc;
      border-radius: 0.06rem;
    }
  }
}

.item-list {
  .item {
    line-height: 0.76rem;
    padding-left: 0.2rem;
  }
}
</style>