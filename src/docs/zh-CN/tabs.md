<script>
  export default {
    data () {
      return {
        activeKey: '1',
        activeKey2: '2'
      }
    },
    watch: {
    },
    methods: {
      onClick (item) {
        console.log('on-clcik:' + item)
      }
    }
  }
</script>

## Tabs 标签页

### 何时使用

- 卡片式的页签，提供可关闭的样式，常用于容器顶部。
- 标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs。

### 基本

::: demo 默认选中第一项。

```html
<wu-tabs v-model="activeKey">
 	<wu-tab-pane tab="tab 1" name="1"> pane item 1</wu-tab-pane>
 	<wu-tab-pane tab="tab 2" name="2"> pane item 2</wu-tab-pane>
 	<wu-tab-pane tab="tab 3" name="3"> pane item 3</wu-tab-pane>
</wu-tabs>
```
:::

### 卡片式页签

::: demo 另一种样式的页签。

```html
<wu-tabs v-model="activeKey2" type="card">
 	<wu-tab-pane tab="tab 1" name="1"> pane item 1</wu-tab-pane>
 	<wu-tab-pane tab="tab 2" name="2"> pane item 2</wu-tab-pane>
 	<wu-tab-pane tab="tab 3" name="3"> pane item 3</wu-tab-pane>
</wu-tabs>
```
:::

## API

### wu-tabs

| 参数             | 说明                                         | 类型     | 默认值        |
|------------------|----------------------------------------------|----------|---------------|
| value             | 当前激活 tab 面板的 key（v-model双向绑定）      | string   | 无            |
| on-change         | 切换面板的回调                               | Function | 无            |
| on-tab-click       | tab 被点击的回调                             | Function | 无            |
| type | 页签的基本样式，可选 `line`、`card` `editable-card` 类型   | string   | 'line'      |
| size | 大小，提供 `default` 和 `small` 两种大小，仅当 `type="line"` 时生效。  | string   | 'default'      |

### wu-tab-pane

| 参数 | 说明             | 类型                    | 默认值 |
|------|------------------|-------------------------|--------|
| name  | 对应 activeKey   | string                  | 无     |
| tab  | 选项卡头显示文字 | string | 无     |