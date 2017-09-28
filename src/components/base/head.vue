<template lang="pug">
  header
    .header-navbar
      .header-navbar__logo
        a.logo(href='javascript:void(0)', @click="handleHomeClick")
      .header-navbar__collapse
        .header-navbar__search
          wu-select(
            v-model="selectType"
            placeholder="搜索组件..."
            showSearch
            @on-change="handleChange")
            wu-option(:value="item.path", :label="item.name", :key="index", v-for="(item, index) in components")
      .header-lang 中文
      ul.header-nav
        li.header-nav__item(v-for="nav in navList")
          router-link(active-class="active", :to='nav.path') {{nav.name}}
</template>

<script>
  import navConfig from '@/i18n/top.nav.json'
  import list from '@/i18n/nav.config.json'
  export default {
    data () {
      return {
        navList: [],
        components: [],
        selectType: ''
      }
    },
    created () {
      this.handleTitleData(navConfig)
    },
    methods: {
      handleHomeClick () {
        this.$router.push({path: '/'})
      },
      handleTitleData (data) {
        this.navList = data['zh-CN']
      },
      handleChange (val) {
        this.$router.push({ path: `${val}` })
      },
      handleMenuData (menus) {
        let comList = []
        menus.menuItem.forEach((item1) => {
          if (item1.icon !== 'icon-start') {
            item1.menuItem.forEach((item2) => {
              comList.push(item2)
            })
          }
        })
        return comList
      }
    },
    mounted () {
      this.components = this.handleMenuData(list)
    }
  }
</script>

<style lang="stylus">
  .header-navbar
    transition opacity .5s
    background #fff
    height 80px
    margin-bottom 24px
    padding 0 48px
    width 100%
    a
     color #666
    &__logo
      float left
      height auto
      padding 2px 0 0
      .logo
        display block
        width 200px
        height 79px
        margin-top 10px
        background url("../../assets/logo_wuui.png") no-repeat
        background-size 65%
        opacity 0.8
    &__search
      float left
      margin-top 30px
      width 220px
      padding-left 10px
      border-left 1px solid #e9e9e9
      .wu-select
        width 160px
      .wu-select-selection
        background none
        border none
      .wu-select-open .wu-select-selection
        border-color none
        box-shadow none
      .wu-icon
        display none
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
