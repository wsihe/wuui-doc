## AutoComplete 自动完成

### 何时使用

需要自动完成时。

#### 基本使用

::: demo 通过 dataSource 设置自动完成的数据源。

```html
<wu-auto-complete value="111" placeholder="搜索"></wu-auto-complete>

```
:::

## API

### wu-auto-complete

| 参数           | 说明                             | 类型        | 默认值 |
|----------------|----------------------------------|------------|---------|
| dataSource          | 自动完成的数据源 | []     |         |
| value    | 指定当前选中的条目 | string\|string[]    |  无  |
| on-change | 选中 option，或 input 的 value 变化时，调用此函数 | function(value) | 无 |
| on-search | 搜索补全项的时候调用 | function(value) | 无 |
| disabled | 是否禁用 | boolean | false |
| placeholder | 输入框提示 | string | - |
