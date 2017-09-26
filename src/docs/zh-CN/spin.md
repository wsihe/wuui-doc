<script>
  export default {
    data () {
      return {
        value: false,
        value2: false
      }
    },
    watch: {
    },
    methods: {
      handle (val) {
        this.value = val
      },
      handle2 (val) {
        this.value2 = val
      }
    }
  }
</script>

## Spin 加载中

用于页面和区块的加载中状态。

### 何时使用

页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

### 基本用法

::: demo 一个简单的 `loading` 状态，通过 `size` 改变大小，小的用于文本加载，默认用于卡片容器级加载，大的用于页面级加载。

```html
<div class="spin-content">
 <wu-spin size="small"></wu-spin>
 <wu-spin></wu-spin>
 <wu-spin size="large"></wu-spin>
<div>
```
:::

### 容器

::: demo 放入一个容器中。

```html
<div class="example">
 <wu-spin v-model="value"></wu-spin>
<div>
```
:::

### 卡片加载中

::: demo 可以直接把内容内嵌到 `Spin` 中，将现有容器变为加载状态。

```html
<wu-spin v-model="value">
	<div class="example">
		<p> content of spin </p>
	<div>
</wu-spin>
<wu-switch @on-change="handle"><wu-switch>

```
:::

### 延迟

::: demo 延迟显示 loading 效果。当 spinning 状态在 `delay` 时间内结束，则不显示 loading 状态。。

```html
<wu-spin v-model="value2" :delay="600">
	<div class="example">
		<p> content of spin </p>
	<div>
</wu-spin>
<wu-switch @on-change="handle2"><wu-switch>

```
:::


<style scoped>
.spin-content div {
	display:inline-block;
	margin-right:5px;
}
.example {
  text-align: center;
  background: rgba(0,0,0,0.05);
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 30px 50px;
  margin: 20px 0;
}
</style>


## API

### wu-spain

参数 | 说明 | 类型 | 默认值
----|------|-----|------
size | 组件大小，可选值为 `small` `default` `large` | string | 'default'
spinning | 是否旋转 | boolean | true
tip | 当作为包裹元素时，可以自定义描述文案 | string | -
delay | 延迟显示加载效果的时间（防止闪烁） | number (毫秒) | -


