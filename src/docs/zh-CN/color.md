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

简洁实用的色彩。

Wuui 色彩由 Ant Design 的色板 5 种基本色彩组成，每种基本色（第 6 格）又衍生出 10 种渐变色。其中友好的蓝色作为主色和不同的场景的辅助色

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

相关链接：
- [色板生成算法](https://github.com/ant-design/ant-design/blob/734beb84ffc3f0469fbae1566aa8450f966cb261/components/style/color/colorPalette.less)
