/**
* @file   assetView.vue
* @author river
* @create 2017-05-16 13:44
*/

<template lang="pug">
  .page.page-component.page-container
    .page-mark.content(v-marked="").
      ## Wuui

      这里基于 Ant Design 的 Vue2.0 实现，开发和服务于后台产品。

      ### 特性

      - 提炼自中后台产品的交互语言和视觉风格。
      - 开箱即用的高质量 Vue2.0 组件。
      - 基于 npm + webpack + babel 的工作流

      ### 支持环境

      * 现代浏览器和 IE9 及以上


</template>

<script>
  export default {
    name: 'assetView',
    data () {
      return {
        totalAsset: ''      // 客户总资产
      }
    },
    created () {
    },
    activated () {
//      console.log('assetView activated')
    },
    methods: {
    }
  }
</script>

<style lang="stylus" scoped>
  .page-home
    display block
</style>
