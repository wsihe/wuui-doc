## Button 按钮

按钮用于开始一个即时操作。

### 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

#### 按钮类型

::: demo 按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。

```html
 <div>
	<wu-button type="primary">primary</wu-button>
	<wu-button>Default</wu-button>
	<wu-button type="dashed">dashed</wu-button>
	<wu-button type="danger">danger</wu-button>
 </div>
```
:::

#### 图标按钮

::: demo 当需要可在 `wu-button` 内嵌入 `icon`。

```html
 <div>
 	<wu-button type="primary" shape="circle" icon="search"></wu-button>
 	<wu-button type="primary" icon="search">Search</wu-button>
 	<wu-button shape="circle" icon="search"></wu-button>
 	<wu-button icon="search">Search</wu-button>
 	<wu-button type="dashed" shape="circle" icon="search"></wu-button>
 	<wu-button type="dashed" icon="search">Search</wu-button>
 </div>
```
:::

#### 按钮尺寸

::: demo 按钮有大、中、小三种尺寸，默认为中尺寸。

```html
 <wu-button-group size='large' class='group'>
 	<wu-button>large</wu-button>
 	<wu-button>large</wu-button>
 	<wu-button>large</wu-button>
 </wu-button-group>
 <wu-button-group class='group'>
 		<wu-button type="primary">default</wu-button>
  	<wu-button type="primary">default</wu-button>
  	<wu-button type="primary">default</wu-button>
  </wu-button-group>
 <wu-button-group size='small' class='group'>
	<wu-button type="dashed">small</wu-button>
 	<wu-button type="dashed">small</wu-button>
 	<wu-button type="dashed">small</wu-button>
 </wu-button-group>
```
:::

<style>
	.group {
		margin-right:20px
	}
  .group .wu-btn {
    margin-right: -5px;
  }
  .group .wu-btn:first-child {
      margin-left: 0;
  }
</style>

# API

### wu-button

通过设置 `wu-button` 的属性来产生不同的按钮样式，推荐顺序为：`type` -> `shape` -> `size` -> `loading` -> `disabled`

按钮的属性说明如下：

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
type | 设置按钮类型，可选值为 `primary` `dashed` `danger` 或者不设 | string | -
html-type | 设置 `button` 原生的 `type` 值 | string | `button`
icon | 设置按钮的图标类型 | string | -
shape | 设置按钮形状，可选值为 `circle` 或者不设 | string | -
size | 设置按钮大小，可选值为 `small` `large` 或者不设 | string | `default`
loading | 设置按钮载入状态 | boolean \| { delay: number } | `false`
ghost | 幽灵属性，使按钮背景透明  | boolean | false


### wu-button-group

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
size | 设置按钮大小，可选值为 `small` `large` 或者不设 | string | `default`