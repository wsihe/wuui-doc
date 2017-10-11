## Modal对话框

模态对话框。

### 何时使用

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 `wu-modal` 在当前页面正中打开一个浮层，承载相应的操作。

另外当需要一个简洁的确认框询问用户时，可以使用精心封装好的 `this.$modal.confirm()` 等方法。


## API

### wu-modal

| 参数       | 说明           | 类型             | 默认值       |
|------------|----------------|------------------|--------------|
| visible    | 对话框是否可见 | boolean          | 无           |
| confirm-loading | 确定按钮 loading | boolean    | 无           |
| title      | 标题           | string\|slot | 无           |
| on-ok       | 点击确定回调       | function(e)     | 无           |
| on-cancel   | 点击遮罩层或右上角叉或取消按钮的回调  | function(e)  | 无         |
| width      | 宽度           | string\|number | 520           |
| footer     | 底部内容        | slot | 确定取消按钮 |
| hideFooter | 隐藏底部按钮 | boolean   | false       |
| ok-text     | 确认按钮文字    | string           | 确定       |
| cancel-text | 取消按钮文字    | string           | 取消       |
| mask-closable | 点击蒙层是否允许关闭 | boolean   | true       |
| modalClass | 对话框容器的类名 | string   | - |

### this.$modal.method()

包括：

- `this.$modal.info`
- `this.$modal.success`
- `this.$modal.error`
- `this.$modal.warning`
- `this.$modal.confirm`

以上均为一个函数，参数为 object，具体属性如下：

| 参数       | 说明           | 类型             | 默认值       |
|------------|----------------|------------------|--------------|
| title      | 标题           | string | 无           |
| content    | 内容           | string | 无           |
| onOk       | 点击确定回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭      | function         | 无           |
| onCancel   | 取消回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭       | function         | 无           |
| width      | 宽度           | string\|number | 416           |
| okText     | 确认按钮文字    | string           | 确定       |
| cancelText | 取消按钮文字    | string           | 取消       |