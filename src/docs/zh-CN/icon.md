<script>
	import Clipboard from 'clipboard'
	import iconList from '@/config/icon.json'
  export default {
    data () {
      return {
				direction: iconList.direction,
				suggestion: iconList.suggestion,
				logo: iconList.logo,
				other: iconList.other,
      }
    },
    methods: {
      clip (val) {
        const html = `<icon type="${val}"></icon>`
        const clipboard = new Clipboard('.icon-box-copy', {
          text () {
            return html
          }
        })
        clipboard.on('success', (e) => {
          e.clearSelection()
          clipboard.destroy()
          this.$message({
            message: 'Code copied',
            type: 'success'
          })
        })
      }
    }
  }
</script>
## Icon 图标

语义化的矢量图形。

### 图标的命名规范

- 实心和描线图标保持同名，用 `-o` 来区分，比如 `question-circle`（实心） 和 `question-circle-o`（描线）；
- 命名顺序：`[图标名]-[形状?]-[描线?]-[方向?]`。


### 如何使用

::: demo 使用 `<icon type=''/>` 标签声明组件，指定图标对应的 type 属性

```html
<icon type="link" class="icon-cls"></icon>
<icon type="calendar" class="icon-cls"></icon>
<icon type="right-circle-o" class="icon-cls"></icon>
<icon type="left-circle" class="icon-cls"></icon>
<style>
.icon-cls {
  font-size: 24px;
  color: #2d8cf0;
}
</style>
```
:::

### 方向性图标
<ul class='wu-icons-list'>
	<li class='icon-box-copy' v-for='icon in direction' @click='clip(icon)'>
		<div><icon :type='icon'></div>
		<span class="wu-icon-class"> {{icon}} </span>
	</li>
</ul>

### 提示建议性图标
<ul class='wu-icons-list'>
	<li class='icon-box-copy' v-for='icon in suggestion' @click='clip(icon)'>
		<div><icon :type='icon'></div>
		<span class="wu-icon-class"> {{icon}} </span>
	</li>
</ul>


### 网站通用图标
<ul class='wu-icons-list'>
	<li class='icon-box-copy' v-for='icon in other' @click='clip(icon)'>
		<div><icon :type='icon'></div>
		<span class="wu-icon-class"> {{icon}} </span>
	</li>
</ul>

### 品牌和标识
<ul class='wu-icons-list'>
	<li class='icon-box-copy'  v-for='icon in logo' @click='clip(icon)'>
		<div><icon :type='icon'></div>
		<span class="wu-icon-class"> {{icon}} </span>
	</li>
</ul>

<style>
.icon-cls {
  font-size: 24px;
  margin-right:20px;
  color: #2d8cf0;
}
</style>

由于图标字体本质上还是文字，可以使用`vue` 的 `style` 和 `class` 绑定来设置图标的大小和颜色。


| 参数      | 说明             | 类型      | 默认值  |
|----------|------------------|----------|--------|
| type | 图标类型 | string | - |
| spin | 是否有旋转动画 | boolean | false |
