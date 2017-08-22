<template lang="pug">
  .home-page
    .home-page__logo
      <!--img.w-logo-image(src="../assets/images/w-logo-blue.png")-->
    h1.home-page__title Wuui
    h2.home-page__sub-title 基于 Vue 2.0 和 Ant Design 的 UI 组件库
    .home-button
      .btn
        router-link(active-class="active" to='guide') 设计规范
      .btn
        router-link(active-class="active" to='component') 开发指引
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
    padding-top 50px
    height 100%
    background url("../assets/images/bg.png") no-repeat
    background-size 100%
  .home-page__logo
    margin 0 auto
    width 120px
    height 120px
    line-height 100px
    text-align center
    color #7e57c2
    font-size 50px
    display flex
    .w-logo-image
      margin 10px 0 0 10px
      width 80%
      height 80%
  .home-page__title
    font-size 3em
    font-weight 700
    color #fff
    text-align center
  .home-page__sub-title
    text-align center
    color #fff
  .home-button
    width 200px
    margin 30px auto
    .btn
      display inline-block
      width 90px
      line-height 32px
      text-align center
      border-radius 2px
      background #fff
      cursor pointer
      a
        color #108ee9
      &:first-child
        margin-right 20px

</style>
