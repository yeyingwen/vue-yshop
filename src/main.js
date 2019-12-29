/*
* 入口JS
* */
import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'

import './mock/mockServer.js'      //加载mockSeerver即可
import loading from './common/img/loading.c1486d8.gif'
import './filters'    // 加载过滤器

// 注册全局组件标签
Vue.component(Button.name, Button)    //mt-button

Vue.use(VueLazyload, {    // 内部自定义了指令v-lazy
  loading
})

new Vue({
  el:'#app',
  render:h => h(App),
  router,     //使用vue-router
  store,      //使用vuex
})






