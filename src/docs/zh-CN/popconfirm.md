<script>
  export default {
    data () {
      return {
        disabled: false
      }
    },
    methods: {
      handleConfirm () {
        console.log('confirm')
      },
      handleCancel () {
        console.log('cancel')
      },
      handle (val) {
        this.disabled = val
      }
    }
  }
</script>
## Popconfirm 气泡确认框

点击元素，弹出气泡式的确认框。

### 何时使用

目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户。

### 基本

::: demo 最简单的用法。

```html
<wu-popconfirm title="您是否确定要删除此项 ？">
  <a>删除</a>
</wu-popconfirm>
<wu-popconfirm title="您是否确定要删除此项 ？" placement="bottom" @on-confirm="handleConfirm" @on-cancel="handleCancel">
  <a>删除</a>
</wu-popconfirm>

```
:::


### 条件触发

::: demo 可以判断是否需要弹出。

```html
<wu-switch @on-change="handle" :style="{marginBottom:'20px'}"></wu-switch>
<div>
  <wu-popconfirm title="您是否确定要删除此项 ? " :disabled="disabled">
    <a>删除</a>
  </wu-popconfirm>
</div>

```
:::

## API

### wu-popconfirm

| 参数      | 说明                                     | 类型          | 默认值 |
|-----------|------------------------------------------|---------------|--------|
| title     | 确认框的描述                             | string\|slot | 无     |
| on-confirm | 点击确认的回调                           | function(e)      | 无     |
| on-cancel  | 点击取消的回调                           | function(e)      | 无     |
| okText    | 确认按钮文字                              | string        | 确定   |
| cancelText| 取消按钮文字                              | string        | 取消   |
| disabled | 可以判断是否需要弹出                          | Boolean        | -   |

更多属性请参考 [wu-tooltip](#/component/tooltip)。