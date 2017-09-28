<template lang="pug">
  .sidebar
    .sidebar-item
      router-link(active-class="active", to="/component/introduce", exact, tag="span") Wuui {{version}}
    wu-menu(expand, :inline-indent="0")
      wu-submenu(:name="menu.icon", :key="index", v-for="(menu, index) in menuList")
        template(slot="title")
          i.sidebar-icon.iconfont(:class="[menu.icon]")
          span.sidebar-title {{menu.name}}
        wu-menu-item(:name="childMenu.path" v-for="(childMenu, index) in menu.children", :key="index")
          router-link(active-class="active", :to="`/component/${childMenu.path}`", exact) {{childMenu.name}}
  </template>

<script>
  import Wuui from 'wuui'
  import navList from '@/i18n/nav.config.json'

  export default {
    props: {
      typeName: {
        type: String,
        default: 'sider'
      },
      base: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        menuList: [],
        activeIndex: -1,
        version: Wuui.version
      }
    },
    mounted () {
      this.handleMenuData(navList)
    },
    methods: {
      handleMenuData (ret) {
        if (!ret || !ret.menuItem || !ret.menuItem.length) {
          return
        }
        var menuList = this.buildMenuTree(ret.menuItem)
        this.menuList = menuList
      },

      handleItemClick (item) {
        this.$router.push({path: `/component/${item}`})
      },

      buildMenuTree (itemList) {
        let _this = this
        if (!itemList || !itemList.length) {
          return []
        }
        var list = []
        itemList.forEach(function (item) {
          var menu = {}
          menu.name = item.name
          menu.path = item.path
          menu.icon = item.icon || 'icon-menu-default'
          menu.active = false
          menu.children = _this.buildMenuTree(item.menuItem, menu)
          menu.leaf = menu.children.length === 0
          list.push(menu)
        })
        return list
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../css/define'
  @import '../../assets/fonts/iconfont.css'
  .sidebar
    &-item span
      display inline-block
      width 100%
      padding-left 44px
      color rgba(0,0,0,.65)
      font-size 14px
      height 50px
      line-height 50px
      border-bottom 1px solid #EFF2F7
      as-button()
      &.active
        color #108ee9
    .wu-menu-item
      padding 0
      a
        padding-left 48px
        padding-right 0
        &.active
          color #108ee9
          background-color #ecf6fd
          &::after
            content ""
            position absolute
            right 0
            top 0
            bottom 0
            border-right 3px solid #108ee9
            transition transform .15s cubic-bezier(.645,.045,.355,1),opacity .15s cubic-bezier(.645,.045,.355,1)
            opacity 1
            transform scaleY(1)
    .wu-menu-item-selected
      background-color #fff !important
      a
        color rgba(0,0,0,.65)
      &::after
        border-right 1px solid #e9e9e9
    &-item &-item-icon
      float right
      width 50px
      text-align center
    &-icon
      padding-left 25px
      font-size 13px
      margin-right 8px
    &-title
      font-size 13px
</style>
