<template lang="pug">
  .main
    main-nav
    .main__content.clearfix
      side-bar(v-on:data="inactive")
      .main__container
        main-tab
        tab-manager
          router-view
    footer
      p 1111
</template>

<script>
  import mainNav from 'components/base/head'
  import sideBar from 'components/base/sidebar'
  import mainTab from 'components/base/tab'
  export default {
    data () {
      return {
        show: true // 页签数据
      }
    },
    components: {
      mainNav,
      sideBar,
      mainTab
    },
    created () {
      // console.log(this.show)
    },
    methods: {
      inactive (data) {
      }
    }
  }
</script>

<style lang="stylus">
  @import "css/index.styl"
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
      width 16%
      min-width 200px
    .main__container
      display block
      float left
      width 84%
      padding 0 0 120px
      margin-left -1px
      min-height 500px
      overflow hidden
      border-left 1px solid #e9e9e9
    .router-fade-enter-active, .router-fade-leave-active
      transition opacity .3s
    .router-fade-enter, .router-fade-leave-active
      opacity 0
</style>
