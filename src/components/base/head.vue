<template lang="pug">
  header
    .header-navbar
      .header-navbar__logo
        a.logo(href='javascript:void(0)')
      <!--.header-navbar__collapse-->
        <!--.header-navbar__search-->
          <!--el-input(placeholder="请输入组件编号或组件名称" icon="search")-->
      .header-lang 中文
      ul.header-nav
        li.header-nav__item
          router-link(active-class="active" to='index') 首页
        li.header-nav__item
          router-link(active-class="active" to='guide') 指南
        li.header-nav__item
          router-link(active-class="active" to='component') 组件
        //li.header-nav__item
        //  a 中文/En
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    created () {
    },
    mounted () {
    },
    computed: {
    },
    methods: {
    }
  }
</script>

<style lang="stylus" scoped>
  .header-navbar
    transition opacity .5s
    background #fff
    height 80px
    margin-bottom 24px
    padding 0 48px
    width 100%
    &__logo
      float left
      height auto
      padding 2px 0 0
      .logo
        display block
        width 415px
        height 45px
        margin-top 10px
        background url("../../assets/logo.png") no-repeat
        background-size 50%
    &__search
      float left
      margin-top 15px
      width 220px
    .header-nav
      border 0
      float right
      font-size 14px
      font-family Lato,Helvetica Neue For Number,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif;
      .header-nav__item
        position relative
        top -2px
        float left
        height 80px
        line-height 80px
        min-width 72px
        text-align center
        border-bottom-width 3px
        a
          text-decoration none
          color #666
          display block
          padding 0 20px
          opacity .9
          &:hover, &.active
            border-bottom 3px solid #108ee9
            color #108ee9
            font-weight 700
    .header-lang
      float right
      margin-top 28px
      margin-left 40px
      padding 1px 5px 2px
      color #999
      font-size 12px
      border-radius 3px
      border 1px solid #e9e9e9
</style>
