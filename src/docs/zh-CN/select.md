<script>
  export default {
    data () {
      return {
        value1: '',
        value2: 'a',
        value3: 'b'
      }
    }
  }
</script>
## Select 选择

### 何时使用

- 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
- 当选项少时（少于 5 项），建议直接将选项平铺，使用 [Radio](/components/radio/) 是更好的选择。

 ### 基本使用

 ::: demo 基本使用。

 ```html
<wu-select v-model="value1" placeholder="请选择">
  <wu-option value="a" label="广州"></wu-option>
  <wu-option value="b" label="北京"></wu-option>
  <wu-option value="c" label="上海"></wu-option>
</wu-select>

<wu-select v-model="value2" placeholder="请选择">
  <wu-option value="a" label="广州"></wu-option>
  <wu-option value="b" label="北京"></wu-option>
  <wu-option value="c" label="上海"></wu-option>
</wu-select>

<wu-select placeholder="请选择" disabled>
  <wu-option value="a" label="广州"></wu-option>
  <wu-option value="b" label="北京"></wu-option>
  <wu-option value="c" label="上海"></wu-option>
</wu-select>
 ```
 :::

 ### 带搜索框

 ::: demo 展开后可对选项进行搜索。

  ```html
 <wu-select v-model="value3" placeholder="搜索" show-search="true">
   <wu-option value="a" label="广州"></wu-option>
   <wu-option value="b" label="北京"></wu-option>
   <wu-option value="c" label="上海"></wu-option>
 </wu-select>

  ```
  :::

 <style>
   .wu-select {
     width: 200px
   }
 </style>

 ## API

### wu-select

| 参数     | 说明           | 类型     | 默认值       |
|----------|----------------|----------|--------------|
| value    | 指定当前选中的条目 | string\|string[] |  -  |
| on-change | 选中 option，或 input 的 value 变化时，调用此函数 | function(value) | - |
| on-blur | 失去焦点的时回调 | function | - |
| on-focus | 获得焦点时回调 | function | - |
| placeholder | 选择框默认文字 | string | - |
| no-data-text | 当下拉列表为空时显示的内容 | string | '无匹配数据' |
| size    | 选择框大小，可选 `large` `small`  | string      |      default      |
| show-search | 使单选模式可搜索 | boolean | false |
| disabled | 是否禁用 | boolean | false |

### wu-option

| 参数     | 说明           | 类型     | 默认值       |
|----------|----------------|----------|--------------|
| disabled    | 是否禁用 | boolean   |  false  |
| value | 默认根据此属性值进行筛选 | string | - |
| label | 选中该 wu-option 后，Select 的 title | string | - |

### wu-option-group

| 参数     | 说明           | 类型     | 默认值          |
|----------|----------------|----------|-----------------|
| label    | 组名           | string | 无  |
| key      |                |  string  | -               |


