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



