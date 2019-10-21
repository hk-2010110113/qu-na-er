<template>
  <ul class="list">
    <!-- <li class="item" v-for="item in alphabetlist">{{item}}</li> -->
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      :ref="item"
    >{{item}}</li>
  </ul>
</template>
<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: {
      type: Object
    }
  },
  data() {
    return {
      bs: null,
      touchStatus: false,
      startY: 0,
      timer: null
    };
  },
  updated() {
    //
    this.startY = this.$refs["A"][0].offsetTop;
  },
  methods: {
    handleLetterClick(e) {
      //向父组件City传递的一个事件，再由city传给list组件
      this.$emit("change", e.target.innerHTML);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          //const startY = this.$refs['A'][0].offsetTop
          const touchY = e.touches[0].clientY - 79;
          const index = Math.floor((touchY - this.startY) / 20);
          if (index >= 0 && index <= this.letters.length)
            this.$emit("change", this.letters[index]);
        }, 16)
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    }
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    }
  }
};
</script>
<style lang="stylus" scoped>
.list {
  display: flex;
  position: absolute;
  top: 1.58rem;
  flex-direction: column;
  justify-content: center;
  right: 0;
  bottom: 0;
  width: 0.4rem;

  .item {
    text-align: center;
    list-style: none;
    line-height: 0.4rem;
    color: $bgColor;
    touch-action: none;
  }
}
</style>