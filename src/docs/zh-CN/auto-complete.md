<script>
  export default {
    data () {
      return {
        value1: '',
        dataSource: [],
        dataSource2: []
      }
    },
    watch: {
    },
    methods: {
      handleSearch (value) {
        this.dataSource = !value ? [] : [
          value,
          value + value,
          value + value + value
        ]
      },
      handleSearch2 (value) {
        let result
        if (!value || value.indexOf('@') >= 0) {
          result = []
        } else {
          result = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`)
        }
        this.dataSource2 = result
      }
    }
  }
</script>
## AutoComplete 自动完成

### 何时使用

需要自动完成时。

#### 基本使用

::: demo 通过 dataSource 设置自动完成的数据源。

```html
<wu-auto-complete
	:data-source="dataSource"
	placeholder="input here"
	@on-search="handleSearch">
</wu-auto-complete>

```
:::

#### 自定义选项

::: demo 也可以直接传 `wu-option` 作为 wu-auto-complete 的 option，而非使用 dataSource。

```html
<wu-auto-complete  placeholder="input here" @on-search="handleSearch2">
	<wu-option :value="item" :key="index" v-for="(item, index) in dataSource2"></wu-option>
</wu-auto-complete>

```
:::

## API

### wu-auto-complete

| 参数           | 说明                             | 类型        | 默认值 |
|----------------|----------------------------------|------------|---------|
| dataSource          | 自动完成的数据源 | Array     |         |
| value    | 指定当前选中的条目 | string\|Array    |  无  |
| on-change | 选中 option，或 input 的 value 变化时，调用此函数 | function(value) | 无 |
| on-search | 搜索补全项的时候调用 | function(value) | 无 |
| disabled | 是否禁用 | boolean | false |
| placeholder | 输入框提示 | string | - |
