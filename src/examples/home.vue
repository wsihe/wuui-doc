/**
* @file   assetView.vue
* @author river
* @create 2017-05-16 13:44
*/

<template lang="pug">
  .page.page-home
    .page-mark(v-marked="").
      这里是 Ant Design 的 React 实现，开发和服务于企业级后台产品。

      ## 特性

      - 提炼自企业级中后台产品的交互语言和视觉风格。
      - 开箱即用的高质量 React 组件。
      - 使用 TypeScript 构建，提供完整的类型定义文件。
      - 基于 npm + webpack + babel 的工作流，支持 ES2015 和 TypeScript。

      ## 支持环境

      * 现代浏览器和 IE9 及以上（需要 [polyfills](https://ant.design/docs/react/getting-started-cn#兼容性)）。
      * 支持服务端渲染。
      * [Electron](http://electron.atom.io/)

      ## 版本

      - 稳定版：[![npm package](https://img.shields.io/npm/v/antd.svg?style=flat-square)](https://www.npmjs.org/package/antd)
      - 开发版：[![](https://cnpmjs.org/badge/v/antd.svg?&tag=beta&subject=npm)](https://www.npmjs.org/package/antd)

      你可以订阅：https://github.com/ant-design/ant-design/releases.atom 来获得稳定版发布的通知。

      ## 安装

      ### 使用 npm 或 yarn 安装

      **我们推荐使用 npm 或 yarn 的方式进行开发**，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。

      ```bash
      $ npm install antd --save
      ```

      ```bash
      $ yarn add antd
      ```

      如果你的网络环境不佳，推荐使用 [cnpm](https://github.com/cnpm/cnpm)。

      ### 浏览器引入

      在浏览器中使用 `script` 和 `link` 标签直接引入文件，并使用全局变量 `antd`。

      我们在 npm 发布包内的 `antd/dist` 目录下提供了 `antd.js` `antd.css` 以及 `antd.min.js` `antd.min.css`。你也可以通过 [![CDNJS](https://img.shields.io/cdnjs/v/antd.svg?style=flat-square)](https://cdnjs.com/libraries/antd)
      或 [UNPKG](https://unpkg.com/antd/dist/) 进行下载。

      > **强烈不推荐使用已构建文件**，这样无法按需加载，而且难以获得底层依赖模块的 bug 快速修复支持。


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
  @import '../css/define'
  .page-home
    display block
</style>
