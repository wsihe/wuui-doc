<script>
	import Clipboard from 'clipboard'
	import colorList from '@/config/color.json'
  export default {
    data () {
      return {
				red: colorList.red,
				green: colorList.green,
				blue: colorList.blue,
				yellow: colorList.yellow,
				grey: colorList.grey
      }
    },
    methods: {
      clip (val) {
        const html = `${val}`
        const clipboard = new Clipboard('.page-color-item', {
          text () {
            return html
          }
        })
        clipboard.on('success', (e) => {
          e.clearSelection()
          clipboard.destroy()
          this.$message({
            message: 'copied:'+`${val}`,
            type: 'success'
          })
        })
      }
    }
  }
</script>
## Color 色彩

在选择色彩时有以下三个注意点：
- 色彩应与产品定位相匹配，且符合用户心理认知；
- 视觉层次应清晰分明，为重要行动点或关键信息定义一个主色，并建立视觉连续性；
- 遵守 WCAG 2.0 的 标准，保证足够的对比度，让色彩更容易被视障碍（色盲）用户识别。

每种基本色（第 6 格）又按上述算法衍生出 10 种渐变色

<div class="color-content">
	<div class="color-title">
		Blue
		<span class="color-description">专业、科技</span>
	</div>
	<div class="page-color">
		<div class="page-color-item" :style="{background:`${color}`}" v-for="(color,index) in blue" @click="clip(color)">
			blue-{{index+1}}
			<span class="page-color-value"> {{color}} </span>
		</div>
	</div>
</div>

<div class="color-content">
	<div class="color-title">Green
		<span class="color-description">成功、通过、安全</span>
	</div>
	<div class="page-color">
		<div class="page-color-item" :style="{background:`${color}`}" v-for="(color,index) in green" @click="clip(color)">
			green-{{index+1}}
			<span class="page-color-value"> {{color}} </span>
		</div>
	</div>
</div>

<div class="color-content">
	<div class="color-title">Red
		<span class="color-description">热情、警示</span>
	</div>
	<div class="page-color">
		<div class="page-color-item" :style="{background:`${color}`}" v-for="(color,index) in red" @click="clip(color)">
			red-{{index+1}}
			<span class="page-color-value"> {{color}} </span>
		</div>
	</div>
</div>

<div class="color-content">
	<div class="color-title">Yellow
		<span class="color-description">活力、提示</span>
	</div>
	<div class="page-color">
		<div class="page-color-item" :style="{background:`${color}`}" v-for="(color,index) in yellow" @click="clip(color)">
			yellow-{{index+1}}
			<span class="page-color-value"> {{color}} </span>
		</div>
	</div>
</div>

<div class="color-content">
	<div class="color-title">Grey
		<span class="color-description">平稳、中性</span>
	</div>
	<div class="page-color">
		<div class="page-color-item" :style="{background:`${color}`}" v-for="(color,index) in grey" @click="clip(color)">
			grey-{{index+1}}
			<span class="page-color-value"> {{color}} </span>
		</div>
	</div>
</div>
