<template lang="pug">
  wu-row
    wu-col(:span="24")
      section.code-box(:class="{expand:isActive}")
        section.code-box-demo
          slot(name="source")
        section.code-box-meta.markdown
          .code-box-title
            a {{title}}
          .description
            slot
          .code-expand-icon(@click="toggleClick")
            img(alt="expand code" src="../assets/images/expand1.svg", :class="imgCls")
            img(alt="expand code" src="../assets/images/expand2.svg", :class="imgCls2")
        section.highlight-wrapper(v-if="isActive")
          Code(:jsfiddle="jsfiddle")
            slot(name="highlight")
</template>

<script>
//  import hljs from 'highlight.js'
  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      jsfiddle: Object
    },
    data () {
      return {
        isActive: false,
        code: ''
      }
    },
    computed: {
      imgCls () {
        return {
          [`code-expand-icon-show`]: !this.isActive,
          [`code-expand-icon-hide`]: this.isActive
        }
      },
      imgCls2 () {
        return {
          [`code-expand-icon-show`]: this.isActive,
          [`code-expand-icon-hide`]: !this.isActive
        }
      }
    },
    methods: {
      toggleClick () {
        this.isActive = !this.isActive
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../css/define'
  .code-box
    border 1px solid $border-color-split
    border-radius $border-radius-base
    display inline-block
    width 100%
    position relative
    margin 0 0 16px
    transition all .2s
    &:target
      border 1px solid $primary-color
      z-index 10
    &-expand-trigger
      cursor pointer
      font-size 14px
      color #9199ac
      margin-left 5px
      opacity .8
      transition all .3s
      top -2px
      position relative
      &-active
        color #3b4357
    &-title
      position absolute
      top -14px
      padding 1px 8px
      margin-left -8px
      color #777
      border-radius $border-radius-base $border-radius-base 0 0
      background #fff
      transition background-color .4s
      a, a:hover
        color rgba(0,0,0,.65)
        font-size 14px
        font-weight 500
    a.edit-button
      position absolute
      right -16px
      top 7px
      font-size 12px
      transform scale(0.9)
      background #fff
      padding-right 6px
      text-decoration none
    &-demo
      border-bottom 1px solid $border-color-split
      padding 42px 20px 50px
    iframe
      width 100%
      border 0
    &-meta
      &.markdown
        position relative
        padding 17px 16px 15px 20px
        border-radius 0 0 $border-radius-base $border-radius-base
        transition background-color .4s
        width 100%
        font-size 12px
      blockquote
        margin 0
      h4,
      section& p
        margin 4px 0
        width 98%
      > p
        font-size 12px
        margin 0.5em 0
        padding-right 25px
        width 100%
        word-break break-word
    &.expand &-meta
      border-radius 0
      border-bottom 1px dashed $border-color-split
    .code-expand-icon
      position absolute
      right 16px
      bottom 23px
      cursor pointer
      width 16px
      height 16px
      line-height 16px
      text-align center
    .code-expand-icon-show,
    .code-expand-icon-hide
      transition all 0.4s
      user-select none
      position absolute
      left 0
      top 0
    .code-expand-icon-show
      opacity 0.55
      pointer-events auto
      &:hover
        opacity 1
    .code-expand-icon-hide
      opacity 0
      pointer-events none
    .highlight-wrapper
      display block
      overflow auto
      border-radius 0 0 $border-radius-base $border-radius-base
      &-expand
        display block
    .highlight-wrapper:hover &-code-copy,
    .highlight-wrapper:hover &-codepen,
    .highlight-wrapper:hover &-riddle
      opacity .66
    pre
      margin 0
      width auto
      code
        border none
        background #fff

</style>
