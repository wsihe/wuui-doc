<template lang="pug">
  .main
    main-nav
    .main__content.clearfix
      .sidebar
        ul.guide-menu-list
          li.guide-item(v-for="nav in navList")
            router-link(active-class="active", :to='nav.path') {{nav.name}}
      .main__container
        .page.markdown
          .content
            router-view
    main-footer
</template>

<script>
  import guideList from '@/i18n/guide.config.json'
  import mainNav from '@/components/base/head'
  import sideBar from '@/components/base/sidebar'
  import mainFooter from '@/components/base/footer'
  export default {
    data () {
      return {
        navList: []
      }
    },
    components: {
      mainNav,
      sideBar,
      mainFooter
    },
    created () {
      this.handleMenuData(guideList)
    },
    methods: {
      handleMenuData (data) {
        this.navList = data['zh-CN']
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .main
    min-width 1040px
    background #ececec
  .main__content
    display block
    margin 0 48px
    border-radius 4px
    padding 1px 0 0
    margin-bottom 24px
    background  #fff
    height 100%
    .sidebar
      display block
      float left
      width 200px
      .guide-menu-list
        margin-top 35px
        .guide-item a
          font-size 16px
          color rgba(0,0,0,0.65)
          line-height 40px
          height 40px
          text-align center
          display block
          position relative
          transition all .3s
          &.active
            color #2f92d1
            &::before
              position absolute
              content ""
              width 6px
              height 6px
              border 1px solid #2f92d1
              border-radius 100%
              left 45px
              bottom 17px
              background #2f92d1
    .main__container
      display block
      margin-left 200px
      padding 0 0 120px
      margin-left -1px
      min-height 500px
      overflow hidden
      border-left 1px solid #e9e9e9
</style>
