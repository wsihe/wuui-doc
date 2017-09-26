<template lang="pug">
  .main
    main-nav
    .main__content.clearfix
      wu-row
        wu-col(:xs="24", :sm="24", :md="6", :lg="4")
          side-bar
        wu-col(:xs="24", :sm="24", :md="18", :lg="20", class="main__container")
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
    components: {
      mainNav,
      sideBar,
      mainFooter
    }
  }
</script>

<style lang="stylus" scoped>
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
    .main__container
      display block
      margin-left 200px
      padding 0 0 120px
      margin-left -1px
      min-height 1170px
      overflow hidden
      border-left 1px solid #e9e9e9
</style>
