import Vue from 'vue'
import router from './router/router'
import 'highlight.js/styles/color-brewer.css'
import Wuui from 'wuui'
import 'wuui/dist/wuui.css'

Vue.use(Wuui)
Vue.config.productionTip = false

new Vue({
  router
}).$mount('#app')
