<template lang="pug">
  .highlight(@mouseenter="toggleIcon(0)", @mouseleave="toggleIcon(1)")
    .code-box-actions(v-show="showIcon")
      span(class="code-box-copy", @click="clip")
        icon(:type="copyType")
    slot
</template>

<script>
//  import hljs from 'highlight.js'
  import Clipboard from 'clipboard'
  export default {
    props: {
      jsfiddle: Object
    },
    data () {
      return {
        showIcon: false,
        copied: false
      }
    },
    computed: {
      copyType () {
        return this.copied ? 'check' : 'copy'
      }
    },
    methods: {
      toggleIcon (val) {
        if (val === 0) {
          this.showIcon = true
        } else {
          this.showIcon = false
        }
      },
      clip () {
        const { html } = this.jsfiddle
        const clipboard = new Clipboard('.code-box-copy', {
          text () {
            return html
          }
        })
        clipboard.on('success', (e) => {
          e.clearSelection()
          clipboard.destroy()
          this.copied = true
//          this.$message('Code copied')
          setTimeout(() => {
            this.copied = false
          }, 2000)
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../css/define'
  @import '../css/highlight'
  .highlight
    position relative
    pre
      margin 0
      padding 0
      background #fff
    &:not(:first-child)
      border-top 1px dashed $border-color-split
  .code-box-actions
    position absolute
    top 10px
    right 12px
    text-align right
    i
      cursor pointer
  .code-box-copy
    font-size 14px
    cursor pointer
    color #222
    transition all .24s
    background #fff
    width 20px
    height 20px
    line-height 20px
    text-align center
    border-radius 20px
    opacity .7
    &:hover
      color $primary-color
      transform scale(1.2)
    .wu-icon-check
      color $green-6 !important
      font-weight bold
  pre
    margin 0
    width auto
    code
      border none
      background #fff

</style>
