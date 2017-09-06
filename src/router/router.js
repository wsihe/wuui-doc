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

Vue.use(Router)

const router = new Router({
  routes:
  [{
    path: '/index',
    name: 'index',
    component: index
  },
  {
    path: '/guide',
    redirect: '/guide/design',
    component: guide,
    children: [
      {
        path: 'design',
        name: 'guide-design',
        component: design
      },
      {
        path: 'contribution',
        name: 'guide-contribution',
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
        path: 'introduce',
        name: 'component-introduce',
        meta: {
          title: '简介'
        },
        component: introduce
      },
      {
        path: 'install',
        name: 'component-install',
        meta: {
          title: '安装'
        },
        component: installMd
      },
      {
        path: 'usage',
        name: 'component-usage',
        meta: {
          title: '使用'
        },
        component: usageMd
      },
      {
        path: 'grid',
        name: 'component-grid',
        meta: {
          title: 'Grid-栅格'
        },
        component: gridMd
      },
      {
        path: 'icon',
        name: 'component-icon',
        meta: {
          title: 'Icon-图标'
        },
        component: iconMd
      },
      {
        path: 'color',
        name: 'component-color',
        meta: {
          title: 'Color-色彩'
        },
        component: colorMd
      },
      {
        path: 'button',
        name: 'component-button',
        meta: {
          title: 'Button-按钮'
        },
        component: buttonMd
      },
      {
        path: 'input',
        name: 'component-input',
        meta: {
          title: 'Input 输入框'
        },
        component: inputMd
      },
      {
        path: 'radio',
        name: 'component-radio',
        meta: {
          title: 'Radio 单选框'
        },
        component: radioMd
      },
      {
        path: 'checkbox',
        name: 'component-checkbox',
        meta: {
          title: 'Checkbox 多选框'
        },
        component: checkboxMd
      },
      {
        path: 'select',
        name: 'component-select',
        meta: {
          title: 'Select 选择'
        },
        component: selectMd
      },
      {
        path: 'autoComplete',
        name: 'component-autoComplete',
        meta: {
          title: 'AutoComplete 自动完成'
        },
        component: autoCompleteMd
      },
      {
        path: 'dropdown',
        name: 'component-dropdown',
        meta: {
          title: 'Dropdown 下拉菜单'
        },
        component: dropdownMd
      },
      {
        path: 'tabs',
        name: 'component-tabs',
        meta: {
          title: 'Tabs 标签页'
        },
        component: tabsMd
      },
      {
        path: 'pagination',
        name: 'component-pagination',
        meta: {
          title: 'Pagination-分页'
        },
        component: paginationMd
      },
      {
        path: 'message',
        name: 'component-message',
        meta: {
          title: 'Message-消息'
        },
        component: messageMd
      },
      {
        path: 'switch',
        name: 'switch',
        meta: {
          title: 'Switch-开关'
        },
        component: switchMd
      },
      {
        path: 'collapse',
        name: 'component-collapse',
        meta: {
          title: 'Collapse-折叠'
        },
        component: collapseMd
      }]
  },
  {
    path: '',
    redirect: '/index'
  }]
})

export default router

