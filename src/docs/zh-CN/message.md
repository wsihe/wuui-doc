<script>
  export default {
    methods: {
      info () {
        this.$message('这是一条消息提示')
      },
      success () {
        this.$message({
          message: '这是一条成功消息',
          type: 'success'
        })
      },
      warning () {
        this.$message({
          message: '这是一条警告消息',
          type: 'warning'
        })
      },
      error () {
        this.$message({
          message: '这是一条错误消息',
          type: 'error'
        })
      },
      destroy () {
      }
    }
  }
</script>

## Message 消息提示

## 何时使用

- 可提供成功、警告和错误等反馈信息。
- 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。

### 普通提示

::: demo 信息提醒反馈。

```html
 <wu-button @click="info">info</wu-button>
 <script>
   export default {
     methods: {
       info () {
         this.$message('这是一条消息提示')
       }
     }
   }
 </script>
```
:::

### 其他提示类型

::: demo 包括成功、失败、警告。

```html
 <wu-button @click="success">success</wu-button>
 <wu-button @click="warning">warning</wu-button>
 <wu-button @click="error">error</wu-button>
 <script>
   export default {
     methods: {
       success () {
         this.$message({
           message: '这是一条成功消息',
           type: 'success'
         })
       },
       warning () {
         this.$message({
           message: '这是一条警告消息',
           type: 'warning'
         })
       },
       error () {
         this.$message({
           message: '这是一条错误消息',
           type: 'error'
         })
       }
     }
   }
 </script>
```
:::

### 修改延时

::: demo 延时关闭message。

```html
 <wu-button @click="success" :duration="6000">success</wu-button>
```
:::

## API

### this.$message

| 参数       | 说明           | 类型                       | 默认值       |
|------------|----------------|--------------------------|--------------|
| message    | 提示内容       | string/VNode | -           |
| type       | 主题           | string/VNode | -           | info
| duration   | 自动关闭的延时，单位秒 | number               | 3000          |
