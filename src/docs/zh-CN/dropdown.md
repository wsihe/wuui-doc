## Dropdown 下拉菜单

### 何时使用

当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。

### 基本

::: demo 最简单的下拉菜单。

```html
<wu-dropdown>
 <a class="wu-dropdown-link"> Hover me
 	<icon type="down"></icon>
 </a>
 <wu-dropdown-menu slot="dropdown">
 	<wu-dropdown-item> menu item 1</wu-dropdown-item>
 	<wu-dropdown-item> menu item 2</wu-dropdown-item>
 	<wu-dropdown-item> menu item 3</wu-dropdown-item>
 </wu-dropdown-menu>
</wu-dropdown>

<wu-dropdown>
 <wu-button> Hover me </wu-button>
 <wu-dropdown-menu slot="dropdown">
 	<wu-dropdown-item> menu item 1</wu-dropdown-item>
 	<wu-dropdown-item> menu item 2</wu-dropdown-item>
 	<wu-dropdown-item> menu item 3</wu-dropdown-item>
 </wu-dropdown-menu>
</wu-dropdown>
```
:::

### 触发方式

::: demo 默认是移入触发菜单，可以点击触发。

```html
<wu-dropdown trigger="click">
 <a class="wu-dropdown-link"> Click me
 	<icon type="down"></icon>
 </a>
 <wu-dropdown-menu slot="dropdown">
 	<wu-dropdown-item> menu item 1</wu-dropdown-item>
 	<wu-dropdown-item> menu item 2</wu-dropdown-item>
 	<wu-dropdown-item> menu item 3</wu-dropdown-item>
 </wu-dropdown-menu>
</wu-dropdown>
```
:::

## API

### wu-dropdown

| 参数        | 说明             | 类型               | 默认值       |
|-------------|------------------|--------------------|--------------|
| trigger     | 触发下拉的行为   | Array<'click'\|'hover'> | ['hover']        |
| placement | 菜单弹出位置：`bottom-start` `bottom-end` `top-start` `top-end`|  String | `bottom-end`
### wu-dropdown-item

| 参数        | 说明             | 类型               | 默认值       |
|-------------|------------------|--------------------|--------------|
| on-click     | 点击左侧按钮的回调 | Function   | - |
| trigger     | 触发下拉的行为   | Array<'click'\|'hover'> | ['hover']        |

### wu-dropdown-menu

| 参数        | 说明             | 类型               | 默认值       |
|-------------|------------------|--------------------|--------------|
| on-click     | 点击左侧按钮的回调 | Function   | - |
| trigger     | 触发下拉的行为   | Array<'click'\|'hover'> | ['hover']        |
