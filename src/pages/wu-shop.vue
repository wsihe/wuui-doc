<template lang="pug">
  .wu-shop
    .shop-container
      .shop-head
        h2 小程序 shop
        p 微信商城小程序
      .shop-content
        h3 功能列表
        p 首页
        p 搜索功能
        p 精选商品
        p 分类商品
        p 商品详情
        p 购物车
        p 购物（购物单编辑、删除，收货地址的选择，下单支付）
        p 会员中心（订单、收藏、收货地址、意见反馈、客服）
      .shop-footer
        wu-tooltip(placement="top", :content="content")
          .content(slot="content")
            img.toooltip-img(src="~@/assets/mpshop/weixin.jpg")
          wu-button(size="large" type="") 扫码体验线上版本
    .simulator(@mouseenter="showWeixin = true", @mouseleave="showWeixin = false")
      .simulator__nav
      .simulator__content
        img.preview-image(src="~@/assets/mpshop/index.jpg")
        .preview-popup(v-if="showWeixin")
          .preview-content
            img.img(src="~@/assets/mpshop/weixin.jpg")
            p 微信扫码体验

</template>

<script>
  export default {
    name: 'WuShop',
    data () {
      return {
        navList: [],
        showWeixin: false,
        content: '111'
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
  .toooltip-img
    width 180px
    height 180px

  .wu-shop
    position relative
    display block
    min-height 580px
    max-width 1300px
    margin 0 auto

    .shop-container
      position: absolute
      top: 100px
      left: 250px
      width: 420px
      .shop-head
        text-align center
        h2
          font-size 32px
        p
          line-height 40px
      .shop-content
        margin-left 40px
        h3
          margin-bottom 10px
        p
          font-size 14px
          line-height 26px
      .shop-footer
        margin 40px

    .simulator
      z-index 1
      overflow hidden
      position absolute
      border-radius 6px
      background #fafafa
      box-sizing border-box
      right 100px
      width 320px
      min-width 320px
      top 10px
      box-shadow 0 1px 4px rgba(0,0,0,.2), 0 1px 2px rgba(0,0,0,.2)

      .simulator__nav
        height 60px
        background-size 100%

      .simulator__content
        position relative
        width 100%
        height 572px
        display block

      .preview-image
        width 100%
        display block
        margin-top -62px

      .preview-popup
        z-index 1
        position absolute
        top 0
        left 0
        width 100%
        height 100%
        background-color rgba(255, 255, 255, 0.98)
        transition 0.3s
        text-align center

      .preview-content
        left 0
        top 50%
        width 100%
        height 200px
        position absolute
        text-align center
        transform translateY(-60%)
        user-select none
        .img
          width 180px
          height 180px
          margin-bottom 15px
          display inline-block
        p
          margin 0
          color #34495e
          line-height 1.5
          font-size 16px

    @media (max-width: 1300px)
      .simulator
        width 320px
        min-width 320px

</style>
