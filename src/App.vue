<template>
  <div id="app">
    <router-view/>
    <FooterGuid v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import FooterGuid from './components/FooterGuid/FooterGuid.vue'


  export default {
    mounted () {
      // this.$store.dispatch('getAddress')
      this.getAddress()
      // 自动获取用户信息
      this.getUserInfo()
    },
    methods:{
       ...mapActions(['getAddress','getUserInfo'])
    },
  components:{
    FooterGuid
  }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
