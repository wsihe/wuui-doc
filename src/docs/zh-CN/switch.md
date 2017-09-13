## Switch 开关

### 何时使用

- 需要表示开关状态/两种状态之间的切换时；
- 和 `checkbox `的区别是，切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。

### 基本用法

::: demo 最简单的用法。

```html
<wu-switch></wu-switch>

```
:::

### 不可用

::: demo Switch 失效状态。

```html
<wu-switch disabled></wu-switch>

```
:::

### 文字和图标

::: demo 带有文字和图标。

```html
<wu-switch>
 <template slot="open"> 开 </template>
 <template slot="close"> 关 </template>
</wu-switch>

<wu-switch>
 <icon slot="open" type="check"></icon>
 <icon slot="close" type="close"></icon>
</wu-switch>

```
:::

### 两种大小

::: demo size="small" 表示小号开关。

```html
<wu-switch ></wu-switch>
<wu-switch size="small"></wu-switch>

```
:::

## API

### wu-switch

| 参数      | 说明                                     | 类型        |默认值 |
|-----------|------------------------------------------|------------|--------|
| value | 指定当前是否选中 | boolean    | false    |
| on-change | 变化时回调函数 | Function(checked:Boolean) |   |
| open | 选中时的内容 | slot |   |
| close | 非选中时的内容 | slot |  |
| size | 开关大小，可选值：`default` `small` | string  | default |