<template lang="pug">
  .main
    main-nav
    .main__content.clearfix
      side-bar(type-name="guide")
      .main__container
        .page.markdown
          .content
            router-view
    main-footer
</template>

<script>
  import mainNav from '@/components/base/head'
  import sideBar from '@/components/base/sidebar'
  import mainFooter from '@/components/base/footer'
  export default {
    data () {
      return {
      }
    },
    components: {
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

<style lang="stylus">
  @import "../css/index.styl"
  .main
    background #ececec
  .main__content
    display block
    margin 0 48px
    border-radius 4px
    padding 1px 0 0
    margin-bottom 24px
    background  #fff
    height 100%
    .tab__container
      padding 0 20px
      background #F9FAFC
      height 32px
      overflow hidden
      .tab__item
        display inline-block
        width 150px
        height 32px
        color #666
        line-height 32px
        text-align center
        background #b4d1ee
        &--active
          background #e7eef3
        .el-icon-close
          font-size 8px
          font-weight 200
    .sidebar
      display block
      float left
      width 200px
    .main__container
      display block
      margin-left 200px
      padding 0 0 120px
      margin-left -1px
      min-height 500px
      overflow hidden
      border-left 1px solid #e9e9e9
    .router-fade-enter-active, .router-fade-leave-active
      transition opacity .3s
    .router-fade-enter, .router-fade-leave-active
      opacity 0
  footer
    clear both
    font-size 12px
    background #fff
    position relative
    z-index 1
    color rgba(0,0,0,.65)
    box-shadow 0 1000px 0 1000px #fff
</style>
