<template lang="pug">
  .wu-shop
    .wu-shop-head
      h2 小程序 MpShop
      p 微信商城小程序
    .wu-shop-content
      h3 概述
      p 小程序商城，已经完成大部分功能的开发，正在测试。
    .wu-shop-content
      h3 截图
      .img-content
        img.img(src="~@/assets/mpshop/index.png")
        img.img(src="~@/assets/mpshop/cat.png")
        img.img(src="~@/assets/mpshop/topic.png")
        // img.img(src="~@/assets/mpshop/goods.png")
</template>

<script>
  export default {
    name: 'WuShop',
    data () {
      return {
        navList: []
      }
    },
    components: {
    },
    created () {
    },
    methods: {
    }
  }
</script>

<style lang="stylus">
  .wu-shop
    display block
    .wu-shop-head
      text-align center
      h2
        font-size 32px
      p
        line-height 40px
    .wu-shop-content
      margin-top 30px
      p
        line-height 40px
    .img-content
      display flex
      max-width 1200px
      margin 0 auto
      .img
        width 33%
        height 100%
        padding 20px 40px
</style>
