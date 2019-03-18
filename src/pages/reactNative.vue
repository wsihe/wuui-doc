<template lang="pug">
  .main
    main-nav
    .main__content.clearfix 敬请期待...
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
</style>
