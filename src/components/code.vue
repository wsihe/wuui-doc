<template>
  <div :class="language" ref="code"><slot></slot></div>
</template>

<script>
//  import hljs from 'highlight.js'
  export default {
    props: {
      lang: {
        type: String,
        default: 'javascript'
      }
    },
    data () {
      return {
        code: ''
      }
    },
    computed: {
      language () {
        if (this.lang === 'auto') {
          return ''
        } else {
          return this.lang
        }
      }
    },
    methods: {
      toggleClick () {
        this.isActive = !this.isActive
      }
    },
    mounted () {
//      this.code = this.$refs.code.innerHTML.replace(/\n/, '')
//      this.$refs.code.innerHTML = this.code
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
    > i,
    > form
      display inline-block
      margin-left 8px
  pre
    margin 0
    width auto
    code
      border none
      background #fff

</style>
