<script>
  export default {
    data () {
      return {
        collapse: false,
        type: 'light'
      }
    },
    methods: {
      handle (val) {
        this.collapse = val
      },
      handle2 (val) {
      	if (val) {
      		this.type = 'dark'
      	} else {
					this.type = 'light'
      	}
      }
    }
  }
</script>
<style scoped>
.markdown ul > li {
    list-style-type: none;
    margin: 0;
    padding: 0 20px;
}
.markdown li.wu-menu-submenu, .markdown li.wu-menu-item-group {
	padding: 0;
}
.wu-menu-item-group-list li.wu-menu-item {
	padding: 0 16px 0 28px;
}
</style>

## Menu 导航菜单

为页面和功能提供导航的菜单列表。

### 何时使用

导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。

### 顶部导航

::: demo 水平的顶部导航菜单。

```html
<wu-menu mode="horizontal">
	<wu-menu-item name="1">
		<icon type="pie-chart"></icon>
		<span> 导航一 </span>
	</wu-menu-item>
	<wu-menu-item  name="2">
		<icon type="appstore"></icon>
  	<span> 导航二 </span>
	</wu-menu-item>
	<wu-submenu name="sub1">
		<template slot="title">
			<icon type="line-chart"></icon>
      <span> 导航三 </span>
		</template>
		<wu-item-group>
			<template slot="title"> 分组一 </template>
			<wu-menu-item name="3"> 选项一 </wu-menu-item>
			<wu-menu-item name="4"> 选项二 </wu-menu-item>
		</wu-item-group>
		<wu-item-group>
    	<template slot="title"> 分组二 </template>
    	<wu-menu-item name="5"> 选项一 </wu-menu-item>
    	<wu-menu-item name="6"> 选项二 </wu-menu-item>
    </wu-item-group>
	</wu-submenu>
	<wu-menu-item  name="5">
  	<a href="https://wuui.github.io/" target="_blank" rel="noopener noreferrer">导航四</a>
  </wu-menu-item>
</wu-menu>
```
:::

### 内嵌菜单

::: demo 垂直菜单，子菜单内嵌在菜单区域。

```html
<wu-menu mode="inline" :style="{width:'200px'}" selected-name="2" :open-names="['sub1']">
	<wu-menu-item name="1">
		<icon type="pie-chart"></icon>
		<span> 导航一 </span>
	</wu-menu-item>
	<wu-submenu name="sub1">
		<template slot="title">
			<icon type="line-chart"></icon>
      <span> 导航二 </span>
		</template>
		<wu-item-group>
			<template slot="title"> 分组一 </template>
			<wu-menu-item name="2"> 选项一 </wu-menu-item>
			<wu-menu-item name="3"> 选项二 </wu-menu-item>
		</wu-item-group>
		<wu-item-group>
    	<template slot="title"> 分组二 </template>
    	<wu-menu-item name="4"> 选项三 </wu-menu-item>
    	<wu-menu-item name="5"> 选项四 </wu-menu-item>
    </wu-item-group>
	</wu-submenu>
	<wu-submenu name="sub2">
		<template slot="title">
			<icon type="desktop"></icon>
      <span> 导航三 </span>
		</template>
		<wu-menu-item name="6"> 选项五 </wu-menu-item>
    <wu-menu-item name="7"> 选项六 </wu-menu-item>
    <wu-submenu name="sub3">
    	<template slot="title"> 导航四 </template>
    	<wu-menu-item name="6"> 选项五 </wu-menu-item>
      <wu-menu-item name="7"> 选项六 </wu-menu-item>
    </wu-submenu>
	</wu-submenu>
	<wu-submenu name="sub4">
    <template slot="title">
    	<icon type="appstore"></icon>
      <span> 导航四 </span>
    </template>
    <wu-menu-item name="6"> 选项七 </wu-menu-item>
    <wu-menu-item name="7"> 选项八 </wu-menu-item>
  </wu-submenu>
</wu-menu>
```
:::

### 缩起内嵌菜单

::: demo 内嵌菜单可以被缩起/展开。

```html
<div :style="{width:'200px'}">
	<wu-switch @on-change="handle" :style="{marginBottom:'20px'}"></wu-switch>
	<wu-menu theme="dark" mode="inline" :inline-collapsed="collapse">
		<wu-menu-item name="1">
			<icon type="pie-chart"></icon>
			<span> 导航一 </span>
		</wu-menu-item>
		<wu-submenu name="sub1">
			<template slot="title">
				<icon type="line-chart"></icon>
				<span> 导航二 </span>
			</template>
			<wu-item-group>
				<template slot="title"> 分组一 </template>
				<wu-menu-item name="2"> 选项一 </wu-menu-item>
				<wu-menu-item name="3"> 选项二 </wu-menu-item>
			</wu-item-group>
			<wu-item-group>
				<template slot="title"> 分组二 </template>
				<wu-menu-item name="4"> 选项三 </wu-menu-item>
				<wu-menu-item name="5"> 选项四 </wu-menu-item>
			</wu-item-group>
		</wu-submenu>
		<wu-submenu name="sub2">
			<template slot="title">
				<icon type="desktop"></icon>
				<span> 导航三 </span>
			</template>
			<wu-menu-item name="6"> 选项五 </wu-menu-item>
			<wu-menu-item name="7"> 选项六 </wu-menu-item>
			<wu-submenu name="sub3">
				<template slot="title"> 导航四 </template>
				<wu-menu-item name="6"> 选项五 </wu-menu-item>
				<wu-menu-item name="7"> 选项六 </wu-menu-item>
			</wu-submenu>
		</wu-submenu>
		<wu-submenu name="sub4">
			<template slot="title">
				<icon type="appstore"></icon>
				<span> 导航四 </span>
			</template>
			<wu-menu-item name="6"> 选项七 </wu-menu-item>
			<wu-menu-item name="7"> 选项八 </wu-menu-item>
		</wu-submenu>
	</wu-menu>
</div>
```
:::

### 只展开当前父级菜单

::: demo 手风琴模式，点击菜单，收起其他展开的所有菜单，保持菜单聚焦简洁。

```html
<wu-menu mode="inline" :style="{width:'200px'}" selected-name="2" :open-names="['sub1']" accordion>
	<wu-menu-item name="1">
		<icon type="pie-chart"></icon>
		<span> 导航一 </span>
	</wu-menu-item>
	<wu-submenu name="sub1">
		<template slot="title">
			<icon type="line-chart"></icon>
      <span> 导航二 </span>
		</template>
		<wu-item-group>
			<template slot="title"> 分组一 </template>
			<wu-menu-item name="2"> 选项一 </wu-menu-item>
			<wu-menu-item name="3"> 选项二 </wu-menu-item>
		</wu-item-group>
		<wu-item-group>
    	<template slot="title"> 分组二 </template>
    	<wu-menu-item name="4"> 选项三 </wu-menu-item>
    	<wu-menu-item name="5"> 选项四 </wu-menu-item>
    </wu-item-group>
	</wu-submenu>
	<wu-submenu name="sub2">
		<template slot="title">
			<icon type="desktop"></icon>
      <span> 导航三 </span>
		</template>
		<wu-menu-item name="6"> 选项五 </wu-menu-item>
    <wu-menu-item name="7"> 选项六 </wu-menu-item>
    <wu-submenu name="sub3">
    	<template slot="title"> 导航四 </template>
    	<wu-menu-item name="6"> 选项五 </wu-menu-item>
      <wu-menu-item name="7"> 选项六 </wu-menu-item>
    </wu-submenu>
	</wu-submenu>
	<wu-submenu name="sub4">
    <template slot="title">
    	<icon type="appstore"></icon>
      <span> 导航四 </span>
    </template>
    <wu-menu-item name="6"> 选项七 </wu-menu-item>
    <wu-menu-item name="7"> 选项八 </wu-menu-item>
  </wu-submenu>
</wu-menu>
```
:::

### 垂直菜单

::: demo 子菜单是弹出的形式。

```html
<wu-menu mode="vertical" :style="{width:'200px'}">
	<wu-menu-item name="1">
		<icon type="pie-chart"></icon>
		<span> 导航一 </span>
	</wu-menu-item>
	<wu-submenu name="sub1">
		<template slot="title">
			<icon type="line-chart"></icon>
      <span> 导航二 </span>
		</template>
		<wu-item-group>
			<template slot="title"> 分组一 </template>
			<wu-menu-item name="2"> 选项一 </wu-menu-item>
			<wu-menu-item name="3"> 选项二 </wu-menu-item>
		</wu-item-group>
		<wu-item-group>
    	<template slot="title"> 分组二 </template>
    	<wu-menu-item name="4"> 选项三 </wu-menu-item>
    	<wu-menu-item name="5"> 选项四 </wu-menu-item>
    </wu-item-group>
	</wu-submenu>
	<wu-submenu name="sub2">
		<template slot="title">
			<icon type="desktop"></icon>
      <span> 导航三 </span>
		</template>
		<wu-menu-item name="6"> 选项五 </wu-menu-item>
    <wu-menu-item name="7"> 选项六 </wu-menu-item>
    <wu-submenu name="sub3">
    	<template slot="title"> 导航四 </template>
    	<wu-menu-item name="6"> 选项五 </wu-menu-item>
      <wu-menu-item name="7"> 选项六 </wu-menu-item>
    </wu-submenu>
	</wu-submenu>
	<wu-submenu name="sub4">
    <template slot="title">
    	<icon type="appstore"></icon>
      <span> 导航四 </span>
    </template>
    <wu-menu-item name="6"> 选项七 </wu-menu-item>
    <wu-menu-item name="7"> 选项八 </wu-menu-item>
  </wu-submenu>
</wu-menu>
```
:::

### 主题

::: demo 内建了两套主题 light|dark，默认 light。

```html
<div :style="{width:'200px'}">
	<wu-switch @on-change="handle2" :style="{marginBottom:'20px'}">
		<template slot="open"> Dark </template>
		<template slot="close"> Light </template>
	</wu-switch>
	<wu-menu :theme="type" mode="inline">
		<wu-menu-item name="1">
			<icon type="pie-chart"></icon>
			<span> 导航一 </span>
		</wu-menu-item>
		<wu-submenu name="sub1">
			<template slot="title">
				<icon type="line-chart"></icon>
				<span> 导航二 </span>
			</template>
			<wu-item-group>
				<template slot="title"> 分组一 </template>
				<wu-menu-item name="2"> 选项一 </wu-menu-item>
				<wu-menu-item name="3"> 选项二 </wu-menu-item>
			</wu-item-group>
			<wu-item-group>
				<template slot="title"> 分组二 </template>
				<wu-menu-item name="4"> 选项三 </wu-menu-item>
				<wu-menu-item name="5"> 选项四 </wu-menu-item>
			</wu-item-group>
		</wu-submenu>
		<wu-submenu name="sub2">
			<template slot="title">
				<icon type="desktop"></icon>
				<span> 导航三 </span>
			</template>
			<wu-menu-item name="6"> 选项五 </wu-menu-item>
			<wu-menu-item name="7"> 选项六 </wu-menu-item>
			<wu-submenu name="sub3">
				<template slot="title"> 导航四 </template>
				<wu-menu-item name="6"> 选项五 </wu-menu-item>
				<wu-menu-item name="7"> 选项六 </wu-menu-item>
			</wu-submenu>
		</wu-submenu>
		<wu-submenu name="sub4">
			<template slot="title">
				<icon type="appstore"></icon>
				<span> 导航四 </span>
			</template>
			<wu-menu-item name="6"> 选项七 </wu-menu-item>
			<wu-menu-item name="7"> 选项八 </wu-menu-item>
		</wu-submenu>
	</wu-menu>
</div>
```
:::

## API

### wu-menu

| 参数     | 说明           | 类型     | 默认值       |
|----------|---------------|----------|--------------|
| theme    | 主题颜色 | string: `light` `dark` | `light` |
| mode | 菜单类型，现在支持垂直、水平、和内嵌模式三种 | string: `vertical` `horizontal` `inline` | `vertical` |
| selected-name | 当前选中的菜单项 name | string |      |
| open-names | 当前展开的 wu-submenu 菜单项 name 数组 | Array |  |
| on-open-change | wu-submenu 展开/关闭的回调 | function(openNames) | - |
| on-click | 点击 wu-menu-item 调用此函数  | function(name) | - |
| inline-indent | inline 模式的菜单缩进宽度 | number | 24 |
| inlineCollapsed | inline 时菜单是否收起状态 | boolean | - |
| accordion | inline 时菜单是否开启手风琴状态 | boolean | - |
| expand | inline 时菜单是否全部展开 | boolean | - |


### wu-menu-item

| 参数     | 说明           | 类型     | 默认值       |
|----------|----------------|----------|--------------|
| disabled    | 是否禁用 | boolean   |  false  |
| name   | item 的唯一标志 |  string |  |

### wu-submenu

| 参数     | 说明           | 类型     | 默认值       |
|----------|----------------|----------|--------------|
| disabled    | 是否禁用 | boolean   |  false  |
| name | 唯一标志 |  string |  |
| title    | 子菜单项值     | slot |    |

### wu-menu-item-group

| 参数     | 说明           | 类型     | 默认值       |
|----------|----------------|----------|--------------|
| title    | 分组标题,也可以通过 slot#title 传入 DOM     | string/slot   |



