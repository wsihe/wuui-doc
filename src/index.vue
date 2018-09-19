<template lang="pug">
  .home-page
    main-nav
    .home-page-wrapper
      .page
        .text-wrapper
          h1.home-page__title Wuui
          h2.home-page__sub-title 基于 Vue 2.0 和 Ant Design 的 UI 组件库
          .home-button
            router-link(class='btn' to='guide')
              wu-button(size="large" type="primary") 设计规范
            router-link(class='btn' to='component')
              wu-button(size="large") 组件
        .img-wrapper
</template>

<script>
  import mainNav from '@/components/base/head'
  export default {
    data () {
      return {
        show: true
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

<style lang="stylus">
  @import "css/index.styl"
  .home-page
    min-height 100vh

    .wu-btn
      width 110px
      border-radius 36px
    .header-navbar  .header-navbar__search
        display none

    .home-page-wrapper
      position relative
      top 100px
      width 100%
      padding 0
      .page
        width 100%
        max-width 1200px
        margin auto
        position relative
        padding 0 24px
      .text-wrapper
        position relative
        left 10%
        width 54%
        max-width 560px
        min-width 420px
        min-height 336px
        color #0d1a26
        z-index 1
      .img-wrapper
        width 46%
        width 482px
        height 500px
        position absolute
        right 10%
        bottom -50px
        background url("./assets/images/index.png") no-repeat
        background-repeat no-repeat
        background-position 40% 80%
        background-size 120%

  .home-page__title
    font-size 48px
    font-weight 700
    color rgba(0, 0, 0, 0.85)
    text-align left
  .home-page__sub-title
    margin 20px 0 40px
    font-size 22px
    text-align left
    color #697b8c
  .home-button
    width 250px
    .btn
      display inline-block
      &:first-child
        margin-right 20px
</style>
