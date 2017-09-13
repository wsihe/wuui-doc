## Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

### 何时使用

- 需要用户输入表单域内容时。
- 提供组合型输入框，带搜索的输入框，还可以进行大小选择。

#### 基本使用

::: demo 基本使用。

```html
 <wu-input placeholder="Basic usage"> </wu-input>
```
:::

#### 前置/后置标签

::: demo 用于配置一些固定组合。

```html
 <wu-input>
	<template slot='addonBefore'>Http://</template>
	<template slot='addonAfter'>.com</template>
 </wu-input>
```
:::

#### 适应文本高度的文本域

::: demo autosize 属性适用于 textarea 节点，并且只有高度会自动变化。另外 autosize 可以设定为一个对象，指定最小行数和最大行数。。

```html
 <wu-textarea autosize>
 </wu-textarea>
 <wu-textarea :autosize="{ minRows: 2, maxRows: 4}">
 </wu-textarea>
```
:::

<style>
	.code-box-demo .wu-input-group-wrapper {
		width:200px
	}
</style>

## API

### wu-input

| 参数      | 说明                                     | 类型       | 默认值 |
|-----------|-----------------------------------------|------------|-------|--------|
| type | 声明 input 类型，同原生 input 标签的 type 属性 | string  | `text` |
| id | 输入框的 id | string | |
| value | 输入框内容 | string | |
| size | 控件大小。注：标准表单内的输入框大小限制为 `large`。可选 `large` `default` `small` | string | `default` |
| disabled | 是否禁用状态，默认为 false | boolean | false |
| addonBefore | 带标签的 input，设置前置标签 | string|slot | |
| addonAfter | 带标签的 input，设置后置标签 | string|slot | |
| prefix | 带有前缀图标的 input | string\|slot | |
| suffix | 带有后缀图标的 input | string\|slot | |


### wu-textarea

| 参数      | 说明                                     | 类型       | 默认值 |
|-----------|-----------------------------------------|------------|-------|--------|
| value | 输入框内容 | string | |
| autosize | 自适应内容高度，可设置为 `true|false` 或对象：`{ minRows: 2, maxRows: 6 }` | boolean\|object | false |
