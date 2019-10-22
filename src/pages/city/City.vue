<template>
    <div>
        <city-header></city-header>
        <city-search :cities='cities'></city-search>
        <city-list ref="list" :letter='letter' :cities='cities' :hotCities='hotCities'></city-list>
        <city-alphabet :cities='cities' @change='handleLetterChange'></city-alphabet>
    </div>
</template>
<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import { getCityData } from '@/request/city'
export default {
   name:'City',
   data() {
       return {
           cities:{},
           hotCities:[],
           alphabet:[],
           letter:''
       }
   },
   components:{
       CityHeader,
       CitySearch,
       CityList,
       CityAlphabet
   },
   mounted(){
       this.getcitiesData()
   },
   methods:{
       getcitiesData(){
           getCityData().then((res)=>{
               const data = res.data
               this.cities = data.cities
               this.hotCities = data.hotCities          
           })
       },
       handleLetterChange(element){
           this.letter = element
           //或者调用子组件
           this.$refs.list.currentTarget(element)
       }
   }
}
</script>
<style lang="stylus" scoped>

</style>