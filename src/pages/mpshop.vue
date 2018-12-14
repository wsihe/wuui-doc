<template lang="pug">
  .main
    main-nav
    .main__content.clearfix
      wu-shop
</template>

<script>
  import mainNav from '@/components/base/head'
  import sideBar from '@/components/base/sidebar'
  import mainFooter from '@/components/base/footer'
  import WuShop from './wu-shop'
  export default {
    data () {
      return {
        navList: []
      }
    },
    components: {
      WuShop,
      mainNav,
      sideBar,
      mainFooter
    },
    created () {
    },
    methods: {
    }
  }
</script>

<style lang="stylus" scoped>
  .main
    min-width 1040px
    padding-bottom 24px
    background #ececec
  .main__content
    display block
    margin 0 48px
    border-radius 4px
    padding 30px
    background  #fff
    height 100%
</style>
