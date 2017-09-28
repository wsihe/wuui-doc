import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import guide from '@/pages/guide'
import component from '@/pages/component'
import design from '@/docs/zh-CN/design'
import contribution from '@/docs/zh-CN/contribution'
import introduce from '@/docs/zh-CN/introduce'
import installMd from '@/docs/zh-CN/install'
import usageMd from '@/docs/zh-CN/usage'
import gridMd from '@/docs/zh-CN/grid'
import colorMd from '@/docs/zh-CN/color'
import iconMd from '@/docs/zh-CN/icon'
import buttonMd from '@/docs/zh-CN/button'
import inputMd from '@/docs/zh-CN/input'
import radioMd from '@/docs/zh-CN/radio'
import checkboxMd from '@/docs/zh-CN/checkbox'
import selectMd from '@/docs/zh-CN/select'
import autoCompleteMd from '@/docs/zh-CN/auto-complete'
import switchMd from '@/docs/zh-CN/switch'
import paginationMd from '@/docs/zh-CN/pagination'
import dropdownMd from '@/docs/zh-CN/dropdown'
import tabsMd from '@/docs/zh-CN/tabs'
import messageMd from '@/docs/zh-CN/message'
import collapseMd from '@/docs/zh-CN/collapse'
import spinMd from '@/docs/zh-CN/spin'
import menuMd from '@/docs/zh-CN/menu'
import tooltipMd from '@/docs/zh-CN/tooltip'
import popoverMd from '@/docs/zh-CN/popover'

Vue.use(Router)

const router = new Router({
  routes:
  [{
    path: '/',
    component: index
  },
  {
    path: '/guide',
    redirect: '/guide/design',
    component: guide,
    children: [
      {
        path: '/guide/design',
        component: design
      },
      {
        path: '/guide/contribution',
        component: contribution
      }
    ]
  },
  {
    path: '/component',
    redirect: '/component/introduce',
    component: component,
    children: [
      {
        path: '/component/introduce',
        meta: {
          title: '简介'
        },
        component: introduce
      },
      {
        path: '/component/install',
        meta: {
          title: '安装'
        },
        component: installMd
      },
      {
        path: '/component/usage',
        meta: {
          title: '使用'
        },
        component: usageMd
      },
      {
        path: '/component/grid',
        meta: {
          title: '栅格 Grid'
        },
        component: gridMd
      },
      {
        path: '/component/icon',
        meta: {
          title: '图标 Icon'
        },
        component: iconMd
      },
      {
        path: '/component/color',
        meta: {
          title: '色彩 Color'
        },
        component: colorMd
      },
      {
        path: '/component/button',
        meta: {
          title: '按钮 Button'
        },
        component: buttonMd
      },
      {
        path: '/component/input',
        meta: {
          title: '输入框 Input'
        },
        component: inputMd
      },
      {
        path: '/component/radio',
        meta: {
          title: '单选框 Radio'
        },
        component: radioMd
      },
      {
        path: '/component/checkbox',
        meta: {
          title: '多选框 Checkbox'
        },
        component: checkboxMd
      },
      {
        path: '/component/select',
        meta: {
          title: '选择 Select'
        },
        component: selectMd
      },
      {
        path: '/component/autoComplete',
        meta: {
          title: '自动完成 AutoComplete'
        },
        component: autoCompleteMd
      },
      {
        path: '/component/dropdown',
        meta: {
          title: '下拉菜单 Dropdown'
        },
        component: dropdownMd
      },
      {
        path: '/component/tabs',
        meta: {
          title: '标签页 Tabs'
        },
        component: tabsMd
      },
      {
        path: '/component/pagination',
        meta: {
          title: '分页 Pagination'
        },
        component: paginationMd
      },
      {
        path: '/component/message',
        meta: {
          title: '消息 Message'
        },
        component: messageMd
      },
      {
        path: '/component/switch',
        meta: {
          title: '开关 Switch'
        },
        component: switchMd
      },
      {
        path: '/component/collapse',
        meta: {
          title: '折叠 Collapse'
        },
        component: collapseMd
      },
      {
        path: '/component/spin',
        meta: {
          title: '加载中 Spin'
        },
        component: spinMd
      },
      {
        path: '/component/menu',
        meta: {
          title: '导航菜单 Menu'
        },
        component: menuMd
      },
      {
        path: '/component/tooltip',
        meta: {
          title: '文字提示 tooltip'
        },
        component: tooltipMd
      },
      {
        path: '/component/popover',
        meta: {
          title: '气泡卡片 Popover'
        },
        component: popoverMd
      }]
  },
  {
    path: '*',
    redirect: '/'
  }]
})

router.beforeEach((to, from, next) => {
  let title = to.meta.title
  title = title ? title + ' | Wuui' : 'Wuui - A Vue.js 2.0  UI Toolkit Base On  Ant Design For Web'
  window.document.title = title
  next()
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

export default router

