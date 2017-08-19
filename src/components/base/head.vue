<template lang="pug">
  header
    .header-navbar
      .header-navbar__logo
        a.logo(href='javascript:void(0)')
      <!--.header-navbar__collapse-->
        <!--.header-navbar__search-->
          <!--el-input(placeholder="请输入组件编号或组件名称" icon="search")-->
      ul.header-nav
        li.header-nav__item
          a 首页
        li.header-nav__item
          a 指南
        li.header-nav__item.active
          a 组件
        li.header-nav__item
          a 中文/En
</template>

<script>
  import {mapState, mapActions, mapMutations} from 'vuex'
  export default {
    data () {
      return {
        userName: '',
        userId: '',
        showMenu: false
      }
    },
    created () {
    },
    mounted () {
      // 获取用户信息
//      this.getUserInfo().then(() => {
//        this.userName = this.userInfo.userName
//        this.userId = this.userInfo.userId
//      })
    },
    computed: {
      ...mapState([
        'userInfo'
      ])
    },
    methods: {
      ...mapActions([
        'getUserInfo'
      ]),
      ...mapMutations([
        'RECORD_LOGOUT'
      ]),
      focus (focused) {
        this.showMenu = focused === true || focused === 1
      },
      logout () {
        this.RECORD_LOGOUT()
        this.$router.push({path: '/login'})
      }
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
        top 1px
        float left
        height 80px
        line-height 80px
        min-width 72px
        text-align center
        border-bottom-width 3px
        &:hover, &.active
          border-bottom 2px solid #108ee9
          color #108ee9
</style>
