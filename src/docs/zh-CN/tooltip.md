## Tooltip 文字提示

简单的文字提示气泡框。

### 何时使用

鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。

可用来代替系统默认的 `title` 提示，提供一个`按钮/文字/操作`的文案解释。

## API

| 参数      | 说明                                     | 类型       | 默认值 |
|-----------|------------------------------------------|------------|--------|
| content     | 提示文字，也可以通过 slot#content 传入 DOM   | string/slot | -    |

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

