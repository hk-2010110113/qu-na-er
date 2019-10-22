<template>
    <div>
        <div class="search">
            <input 
            class="search-input" 
            type="text" 
            placeholder="输入城市名或者拼音" 
            v-model="keyWord"
            >
        </div>
        <div class="search-content" v-show="keyWord">
            <ul>
                <li class="search-item" @click="handleCityClick" v-for="item in list" :key="item.id">{{item.name}}</li>
                <li class="search-item" v-show="hasNoData">没有匹配的数据</li>
            </ul>
        </div>
    </div>
</template>
<script>
import BScroll from "better-scroll";
import {mapMutations} from 'vuex'
export default {
    name:'CitySearch',
    props:{
        cities:{
            type:Object
        }
    },
    data() {
        return {
            keyWord:'',
            list :[],
            timer:null,
            bs:''
        }
    },
    mounted(){
        this.bs = new BScroll('.search-content')
    },
    methods: {
        handleCityClick(e){
            //this.$store.commit('increment',e.target.innerHTML)
            this.increment(e.target.innerHTML)
            this.$router.push('/')
        },
        ...mapMutations(['increment'])
    },
    computed: {
        hasNoData(){
            return !this.list.length
        }
    },
    watch:{
        keyWord(){
            //存在timer就先清理掉
            if(this.timer){
                clearTimeout(this.timer)
            }
            this.timer = setTimeout(()=>{
                const result = []
                for (let i in this.cities){
                    this.cities[i].forEach(value => {
                        if(value.spell.indexOf(this.keyWord)>-1 ||
                        value.name.indexOf(this.keyWord)>-1
                        ){
                            result.push(value)
                        }
                    });
                }  
                this.list = result             
            },100)
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
    height .72rem
    background $bgColor
    padding 0 .1rem
    .search-input
        box-sizing border-box
        height .62rem
        line-height .62rem
        width 100%
        border-radius .06rem
        text-align center
        color #666
.search-content
    position absolute
    overflow hidden
    top 1.58rem
    left 0
    right 0
    bottom 0
    z-index 10
    background rgba(224,224,224,.5)
    .search-item
        line-height .62rem
        padding-left .2rem
        background #fff
</style>