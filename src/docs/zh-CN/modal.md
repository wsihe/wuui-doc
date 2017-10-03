## Modal对话框

模态对话框。

### 何时使用

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 `wu-modal` 在当前页面正中打开一个浮层，承载相应的操作。




## API

### wu-modal

| 参数       | 说明           | 类型             | 默认值       |
|------------|----------------|------------------|--------------|
| visible    | 对话框是否可见 | boolean          | 无           |
| confirm-loading | 确定按钮 loading | boolean    | 无           |
| title      | 标题           | string\|slot | 无           |
| closable   | 是否显示右上角的关闭按钮 | boolean    | true        |
| on-ok       | 点击确定回调       | function(e)     | 无           |
| on-cancel   | 点击遮罩层或右上角叉或取消按钮的回调  | function(e)  | 无         |
| width      | 宽度           | string\|number | 520           |
| footer     | 底部内容，当不需要默认底部按钮时，可以设为 `footer={null}` | string\|slot | 确定取消按钮 |
| ok-text     | 确认按钮文字    | string           | 确定       |
| ok-type     | 确认按钮类型     | string           | primary   |
| cancel-text | 取消按钮文字    | string           | 取消       |
| mask-closable | 点击蒙层是否允许关闭 | boolean   | true       |
| style | 可用于设置浮层的样式，调整浮层位置等 | object   | - |
| wrapClassName | 对话框外层容器的类名 | string   | - |
| on-after-close | wu-modal 完全关闭后的回调 | function | 无 |
| zIndex | 设置 wu-modal 的 `z-index` | Number | 1000 |