## Menu 导航菜单


为页面和功能提供导航的菜单列表。

### 何时使用

导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。


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
| title    | 子菜单项值 | slot |    |

### wu-item-group

| 参数     | 说明           | 类型     | 默认值       |
|----------|----------------|----------|--------------|
| title    | 分组标题       | slot   |



