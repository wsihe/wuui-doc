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
## Radio 单选框

### 何时使用

- 用于在多个备选项中选中单个状态。
- 和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。

#### 基本

::: demo 最简单的用法。

```html
 <wu-radio v-model='value1' @on-change="handle"> radio </wu-radio>
 <span> {{value1}} </span>
 <wu-radio @on-change="handle" disabled> radio </wu-radio>
```
:::

### 单选组合

::: demo 一组互斥的 Radio 配合使用。

```html
<wu-radio-group v-model='value2' @on-change="handle2">
 <wu-radio label="a"> radio1 </wu-radio>
 <wu-radio label="b"> radio2 </wu-radio>
 <wu-radio label="c"> radio3 </wu-radio>
</wu-radio-group>
```
:::

### 按钮样式

::: demo 按钮样式的单选组合。

```html
<wu-radio-group size="large">
 <wu-radio-button label="a"> radio1 </wu-radio-button>
 <wu-radio-button label="b"> radio2 </wu-radio-button>
 <wu-radio-button label="c"> radio3 </wu-radio-button>
</wu-radio-group>
<wu-radio-group size="small">
 <wu-radio-button label="a"> radio1 </wu-radio-button>
 <wu-radio-button label="b"> radio2 </wu-radio-button>
 <wu-radio-button label="c"> radio3 </wu-radio-button>
</wu-radio-group>
```
:::
<style>
.wu-radio-group .wu-radio-button-wrapper+.wu-radio-button-wrapper{
	margin-left:-5px
}
</style>

## API

### wu-radio

| 参数           | 说明                                     | 类型       |  可选值 | 默认值 |
|----------------|------------------------------------------|------------|---------|--------|
| value          | 根据 value 进行比较，判断是否选中        | any     |         | 无     |

### wu-radio-group

单选框组合，用于包裹一组 `wu-radio`。

| 参数           | 说明                             | 类型              | 可选值 | 默认值 |
|----------------|----------------------------------|-------------------|--------|--------|
| on-change       | 选项变化时的回调函数             | Function(e:Event) | 无     | 无     |
| value          | 用于设置当前选中的值             | any            | 无     | 无     |
| size           | 大小，只对按钮样式生效           | string            | `large` `default` `small` | `default` |
