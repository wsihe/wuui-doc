<script>
  export default {
    data () {
      return {
        modalVisible: false,
        modalVisible1: false,
        modalVisible2: false,
        modalVisible3: false,
        buttonLoading: false
      }
    },
    methods: {
      handleOk () {
        this.$message('确定')
      },
      handleOk2 () {
        setTimeout(() => {
          this.modalVisible1 = false
        }, 2000)
      },
      handleCancel () {
        this.$message('取消')
      },
      handleCancelClick () {
        this.modalVisible3 = false
      },
      handleOkClick () {
        this.buttonLoading = true
        setTimeout(() => {
          this.modalVisible3 = false
          this.buttonLoading = false
        }, 2000)
      },
      handleInstance () {
        this.$modal.confirm({
          title: '提示',
          content: '功能描述'
        })
      },
      handleInstance1 () {
        this.$modal.confirm({
          title: '提示',
          content: '功能描述',
          onOk () {
            console.log('onOk')
          },
          onCancel () {
            console.log('onCancel')
          }
        })
      },
      instance (type) {
        const title = '标题'
        const content = '内容'
        switch (type) {
          case 'info':
            this.$modal.info({
              title: title,
              content: content
            })
            break
          case 'success':
            this.$modal.success({
              title: title,
              content: content
            })
            break
          case 'warning':
            this.$modal.warning({
              title: title,
              content: content
            })
            break
          case 'error':
            this.$modal.error({
              title: title,
              content: content
            })
            break
        }
      }
    }
  }
</script>

## Modal对话框

模态对话框。

### 何时使用

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 `wu-modal` 在当前页面正中打开一个浮层，承载相应的操作。

另外当需要一个简洁的确认框询问用户时，可以使用精心封装好的 `this.$modal.confirm()` 等方法。


### 基本

::: demo 第一个对话框。

```html
<wu-button type="primary" @click="modalVisible = true" >对话框</wu-button>
<wu-modal title="提示" v-model="modalVisible" @on-ok="handleOk" @on-cancel="handleCancel">
  <div>内容...</div>
  <div>内容...</div>
  <div>内容...</div>
</wu-modal>
```
:::

### 异步关闭

::: demo 点击确定后异步关闭对话框，例如提交表单。

```html
<wu-button type="primary" @click="modalVisible1 = true" >异步关闭</wu-button>
<wu-modal title="提示" v-model="modalVisible1"  @on-ok="handleOk2" confirm-loading>
  <div>内容...</div>
  <div>内容...</div>
  <div>内容...</div>
</wu-modal>
```
:::

### 自定义页脚

::: demo 更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。

```html
<wu-button type="primary" @click="modalVisible3 = true" >自定义页脚</wu-button>
<wu-modal title="提示" v-model="modalVisible3">
  <div>内容...</div>
  <div>内容...</div>
  <div>内容...</div>
  <template slot="footer">
  	<wu-button size="large" @click="handleCancelClick">取消</wu-button>
		<wu-button type="primary" size="large" @click="handleOkClick" :loading="buttonLoading">确定</wu-button>
  </template>
</wu-modal>
```
:::


### 确认对话框

::: demo 使用 confirm() 可以快捷地弹出确认框，onCancel/onOk 返回 promise 可以延迟关闭。

```html
<wu-button @click="handleInstance" >Confirm</wu-button>
<wu-button @click="handleInstance1" >onCancel/onOk</wu-button>
```
:::

### 信息提示

::: demo 各种类型的信息提示，只提供一个按钮用于关闭。

```html
<wu-button @click="instance('info')" >Info</wu-button>
<wu-button @click="instance('success')" >Success</wu-button>
<wu-button @click="instance('error')" >Error</wu-button>
<wu-button @click="instance('warning')" >Warning</wu-button>
```
:::


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