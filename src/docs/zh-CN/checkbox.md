<script>
  export default {
    data () {
      return {
        value1: false,
        value2: 'a',
        value3: false
      }
    },
    watch: {
    },
    methods: {
      handle (val) {
        console.log(val)
        console.log(this.value1)
      },
      handle2 (val) {
        console.log(val)
        console.log(this.value2)
      }
    }
  }
</script>

## Checkbox 多选框

### 何时使用

- 在一组可选项中进行多项选择时；
- 单独使用可以表示两种状态之间的切换，和 `switch` 类似。区别在于切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。

#### 基本

::: demo 最简单的用法。

```html
 <wu-checkbox v-model='value1' @on-change="handle"> checkbox </wu-checkbox>
 <span> {{value1}} </span>
 <wu-checkbox @on-change="handle" disabled> checkbox </wu-checkbox>
```
:::

### Checkbox 组

::: demo 方便的从数组生成 Checkbox 组。

```html
<wu-checkbox-group size="large" v-model="value2">
 <wu-checkbox label="a"> checkbox 1 </wu-checkbox>
 <wu-checkbox label="b"> checkbox 2 </wu-checkbox>
 <wu-checkbox label="c"> checkbox 3 </wu-checkbox>
</wu-radio-group>

```
:::

## API

### wu-checkbox

| 参数      | 说明             | 类型      | 默认值  |
|----------|------------------|----------|--------|
| value | 是否选中状态| boolean | false |
| on-change | 变化时回调函数 | Function(e:Event) | - |
| indeterminate | 设置 indeterminate 状态，只负责样式控制 | boolean | false |

### wu-checkbox-group

| 参数      | 说明             | 类型      | 默认值  |
|----------|------------------|----------|--------|
| value | 指定选中的选项| string/Array | - |
| on-change | 变化时回调函数 | Function(checkedValue) | - |