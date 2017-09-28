## Popover 气泡卡片

点击/鼠标移入元素，弹出气泡式的卡片浮层。

### 何时使用

当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。

和 `wu-tooltip` 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。


### 基本

::: demo 最简单的用法。

```html
<wu-popover title="标题" content="提示内容">
	<wu-button>鼠标经过</wu-button>
</wu-popover>
<wu-popover title="标题"  :style="{marginLeft:'30px'}">
	<span slot="content">提示内容</span>
	<wu-button type="primary">鼠标经过</wu-button>
</wu-popover>

```
:::


### 触发方式

::: demo 鼠标移入、点击。。

```html
<wu-popover title="标题" content="提示内容" placement="top">
	<wu-button>鼠标经过</wu-button>
</wu-popover>
<wu-popover title="标题" :style="{marginLeft:'30px'}" placement="top" trigger="click">
	<span slot="content">提示内容</span>
	<wu-button type="primary">鼠标点击</wu-button>
</wu-popover>

```
:::

## API

| 参数      | 说明                                     | 类型          | 默认值 |
|-----------|------------------------------------------|---------------|--------|
| title     | 卡片标题                                 | string  | -     |
| content   | 卡片内容，也可以通过 slot#content 传入 DOM     | string/slot | -    |


### 共同的 API

以下 API 为 wu-tooltip、wu-popover 共享的 API。

| 参数      | 说明                                     | 类型       | 默认值 |
|-----------|------------------------------------------|------------|--------|
| placement | 气泡框位置，可选 `top` `left` `right` `bottom` `top-start` `top-end` `bottom-start` `bottom-end` `left-start` `left-end` `right-start` `right-end` | string  | bottom    |
| open-delay | 鼠标移入后延时多少才显示 Tooltip，单位：毫秒 | number | 10 |
| close-delay | 鼠标移出后延时多少才隐藏 Tooltip，单位：毫秒 | number | 10 |
| trigger   | 触发行为，可选 `hover/click`       | string        | hover  |
| enterable  | 鼠标是否可进入到 tooltip/popover 中       | Boolean        | true  |
| popper-options   | [popper.js](https://popper.js.org/popper-documentation.html) 的参数   | Object   | { boundariesElement: 'body', gpuAcceleration: false }  |

