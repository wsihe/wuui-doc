 <script>
   import Wuui from 'wuui'
   export default {
     data () {
       return {
         version: Wuui.version
       }
     }
   }
 </script>

 ## Wuui

 这里基于 Ant Design 的 Vue2.0 实现，开发和服务于 PC 后台产品。

 <div class="pic-plus">
   <img width="150" src="../../assets/images/ant.svg">
   <span>+</span>
   <img width="150" src="../../assets/images/vue.svg">
 </div>

<style>
.pic-plus > * {
  display: inline-block !important;
  vertical-align: middle;
}
.pic-plus span {
  font-size: 30px;
  color: #aaa;
  margin: 0 20px;
}
</style>

### 特性

- 提炼自中后台产品的交互语言和视觉风格。
- 开箱即用的 Vue2.0 组件。
- 基于 npm + webpack + babel 的工作流

### 支持环境

* 现代浏览器和 IE9 及以上
* 支持服务端渲染

### 组件

 <ul class="component-list">
   <li><router-link active-class="active" to='grid' exact> Grid 栅格 </router-link></li>
   <li><router-link active-class="active" to='button' exact> Button 按钮 </router-link></li>
   <li><router-link active-class="active" to='input' exact> Input 输入框 </router-link></li>
   <li><router-link active-class="active" to='radio' exact> Radio 单选框 </router-link></li>
   <li><router-link active-class="active" to='checkbox' exact> Checkbox 多选框 </router-link></li>
   <li><router-link active-class="active" to='select' exact> Select 选择 </router-link></li>
   <li><router-link active-class="active" to='autoComplete' exact> AutoComplete 自动完成 </router-link></li>
   <li><router-link active-class="active" to='switch' exact> Switch 开关 </router-link></li>
   <li><router-link active-class="active" to='pagination' exact> Pagination 分页 </router-link></li>
   <li><router-link active-class="active" to='message' exact> Message 消息 </router-link></li>
   <li><router-link active-class="active" to='dropdown' exact> Dropdown 下拉菜单 </router-link></li>
   <li><router-link active-class="active" to='tabs' exact> Tabs 标签页 </router-link></li>
   <li><router-link active-class="active" to='collapse' exact> Collapse 折叠面板 </router-link></li>
   <li><router-link active-class="active" to='spin' exact> Spin 加载中 </router-link></li>
   <li><router-link active-class="active" to='menu' exact> Menu 导航菜单 </router-link></li>
   <li><router-link active-class="active" to='tooltip' exact> Tooltip 文字提示 </router-link></li>
   <li><router-link active-class="active" to='popover' exact> Popover 气泡卡片 </router-link></li>
   <li><router-link active-class="active" to='popconfirm' exact> Popconfirm 气泡确认框 </router-link></li>
   <li><router-link active-class="active" to='timePicker' exact> TimePicker 时间选择框 </router-link></li>
   <li><router-link active-class="active" to='modal' exact> Modal 对话框 </router-link></li>
 </ul>

### 当前版本

Wuui {{version}}


### 相关链接

- [Vue官方文档](https://cn.vuejs.org/)
- [Ant-Design](https://github.com/ant-design/ant-design/)
