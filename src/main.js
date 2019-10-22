// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import router from './router'
import store from './store/index'
// 全局引入
import 'swiper/dist/css/swiper.css'
// 引入reset.css
import 'styles/reset.css'
// 引入iconfont
import 'styles/iconfont.css'

// 解决300毫秒点击事件延迟问题
import fastClick from 'fastclick'
fastClick.attach(document.body)

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
