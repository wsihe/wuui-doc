<script>
  export default {
    data () {
      return {
        content: '提示内容'
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .wu-tooltip-wrap a
    display inline-block
    line-height 32px
    height 32px
    width 60px
    font-size 14px
    text-align center
    background #f5f5f5
    margin-right 1em
    margin-bottom 1em
    border-radius 6px
</style>


## Tooltip 文字提示

简单的文字提示气泡框。

### 何时使用

鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。

可用来代替系统默认的 `title` 提示，提供一个`按钮/文字/操作`的文案解释。

### 基本

::: demo 最简单的用法。

```html
<wu-tooltip content="提示内容">
  <span>鼠标经过文字提示</span>
</wu-tooltip>
<wu-tooltip :style="{marginLeft:'30px'}">
  <span slot="content">提示内容</span>
  <span>鼠标经过文字提示</span>
</wu-tooltip>

```
:::

### 位置

::: demo 位置有 12 个方向。

```html
<div :style="{marginLeft:'60px'}">
  <wu-tooltip placement="top-start" :content="content">
    <a>TL</a>
  </wu-tooltip>
  <wu-tooltip placement="top" :content="content">
    <a>Top</a>
  </wu-tooltip>
  <wu-tooltip placement="top-end" :content="content">
    <a>TR</a>
  </wu-tooltip>
</div>
<div :style="{width:'60px', float: 'left'}">
  <wu-tooltip placement="left-start" :content="content">
  	<a>LT</a>
  </wu-tooltip>
  <wu-tooltip placement="left" :content="content">
  	<a>Left</a>
  </wu-tooltip>
  <wu-tooltip placement="left-end" :content="content">
  	<a>LB</a>
  </wu-tooltip>
</div>
<div :style="{width:'60px', marginLeft: '270px'}">
  <wu-tooltip placement="right-start" :content="content">
  	<a>RL</a>
  </wu-tooltip>
  <wu-tooltip placement="right" :content="content">
  	<a>Right</a>
  </wu-tooltip>
  <wu-tooltip placement="right-end" :content="content">
  	<a>RB</a>
  </wu-tooltip>
</div>
<div :style="{marginLeft:'60px', clear: 'both'}">
  <wu-tooltip placement="bottom-start" :content="content">
  	<a>BL</a>
  </wu-tooltip>
  <wu-tooltip placement="bottom" :content="content">
  	<a>Bottom</a>
  </wu-tooltip>
  <wu-tooltip placement="bottom-end" :content="content">
  	<a>BR</a>
  </wu-tooltip>
</div>

```
:::

## API

### wu-tooltip

| 参数      | 说明                                     | 类型       | 默认值 |
|-----------|------------------------------------------|------------|--------|
| content     | 提示文字，也可以通过 slot#content 传入 DOM   | string/slot | -    |

### 共同的 API

以下 API 为 wu-tooltip、wu-popover 共享的 API。

| 参数      | 说明                                     | 类型       | 默认值 |
|-----------|------------------------------------------|------------|--------|
| placement | 气泡框位置，可选 `top` `left` `right` `bottom` `top-start` `top-end` `bottom-start` `bottom-end` `left-start` `left-end` `right-start` `right-end` | string  | bottom    |
| open-delay | 鼠标移入后延时多少才显示，单位：毫秒 | number | 10 |
| close-delay | 鼠标移出后延时多少才隐藏，单位：毫秒 | number | 10 |
| trigger   | 触发行为，可选 `hover/click`       | string        | hover  |
| enterable  | 鼠标是否可进入到 tooltip/popover 中       | Boolean        | true  |
| popper-options   | [popper.js](https://popper.js.org/popper-documentation.html) 的参数   | Object   | { boundariesElement: 'body', gpuAcceleration: false }  |

