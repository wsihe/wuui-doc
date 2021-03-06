import Vue from 'vue'
import router from './router/router'
import 'highlight.js/styles/color-brewer.css'
import Wuui from 'wuui'
import 'wuui/dist/wuui.css'
import Demo from 'components/demo'
import Code from 'components/code'

// 开启debug模式
Vue.config.debug = true

Vue.use(Wuui)
Vue.component('Demo', Demo)
Vue.component('Code', Code)

new Vue({
  router
}).$mount('#app')
