<template>
  <div id="app">
    <router-view/>
    <FooterGuid v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import FooterGuid from './components/FooterGuid/FooterGuid.vue'
  export default {
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
