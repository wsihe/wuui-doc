<template lang="pug">
  .main
    main-nav
    .main__content.clearfix
      .banner-s1
        .banner-wrapper
          .banner-title-wrapper
            h2 A ShopApp Of ReactNative
            p 一个基于 React Native 的商城App
</template>

<script>
  import mainNav from '@/components/base/head'
  export default {
    data () {
      return {
        navList: []
      }
    },
    components: {
      mainNav
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
    min-height 100vh
  .main__content
    display block
    margin 0 48px
    border-radius 4px
    padding 30px
    background  #fff
    height 100%
    .banner-s1
      max-width 1200px
      margin 0 auto
    .banner-wrapper
      position relative
      width 100%
      height 450px
      &:before
        content ""
        position absolute
        top 90px
        right 160px
        width 591px
        height 407px
        background url("../assets/rn/rn-bg.png") no-repeat 50%/cover
    .banner-title-wrapper
      position absolute
      top 140px
      left 100px
      color rgba(0,0,0,.85)
      h2
        font-family Avenir-Heavy
        font-size 32px
        color #0d1a26
        letter-spacing 0
        line-height 50px
        font-weight 500
        margin 0
      & > p
        font-family PingFangSC-Regula
        font-size 18px
        color #314659
        letter-spacing 0
        line-height 38px
        margin 16px auto 20px
</style>
