<template lang="pug">
  .home-page
    .home-page__logo
    h1.home-page__title Wuui
    h2.home-page__sub-title 基于 Vue 2.0 和 Ant Design 的 UI 组件库
</template>

<script>
  export default {
    data () {
      return {
        show: true
      }
    },
    created () {
    },
    methods: {
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../css/define';
  .home-page
    padding-top 80px
    height 100%
    background url("../assets/images/bg.png") no-repeat
    background-size 100%
  .home-page__logo
    margin 0 auto
    width 120px
    height 120px
    line-height 100px
    text-align center
    background-color #fff
    color #7e57c2
    font-size 50px
    border-radius 50%
    margin-bottom 32px
    display flex
  .home-page__title
    font-weight 700
    color hsla(0,0%,100%,.87)
    text-align center
  .home-page__sub-title
    text-align center
    color: hsla(0,0%,100%,.87);
</style>
