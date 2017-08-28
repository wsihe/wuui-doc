import Vue from 'vue'
import router from './router/router'
import store from './store/'
import { tabManager } from './libs/tabManager'
import 'highlight.js/styles/color-brewer.css'
import Wuui from 'wuui'
import 'wuui/dist/wuui.css'

Vue.use(Wuui)
Vue.config.productionTip = false

tabManager(Vue, store, router)

new Vue({
  router,
  store
}).$mount('#app')
