import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import guide from '@/pages/guide'
import component from '@/pages/component'

Vue.use(Router)

// const breadcrumb = r => require.ensure([], () => r(require('@/docs/zh-CN/breadcrumb.md')), 'breadcrumb')
const introduce = r => require.ensure([], () => r(require('@/docs/zh-CN/introduce')), 'introduce')
const colorMd = r => require.ensure([], () => r(require('@/docs/zh-CN//color')), 'colorMd')
const buttonMd = r => require.ensure([], () => r(require('@/docs/zh-CN//button')), 'buttonMd')
const switchMd = r => require.ensure([], () => r(require('@/docs/zh-CN/switch')), 'switchMd')
const paginationMd = r => require.ensure([], () => r(require('@/docs/zh-CN/pagination')), 'paginationMd')
const messageMd = r => require.ensure([], () => r(require('@/docs/zh-CN/message')), 'messageMd')
const collapseMd = r => require.ensure([], () => r(require('@/docs/zh-CN/collapse')), 'collapseMd')
const router = new Router({
  mode: 'history',
  routes:
  [{
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/guide',
    name: 'guide',
    component: guide,
    children: [
      {
        path: '/guide',
        redirect: '/switchMd'
      },
      {
        path: '/switchMd',
        name: 'switchMd',
        meta: {
          title: 'Switch-开关'
        },
        component: switchMd
      }
    ]
  },
  {
    path: '/component',
    component: component,
    children: [
      {
        path: '/component',
        redirect: '/introduce'
      },
      {
        path: '/introduce',
        name: 'introduce',
        meta: {
          title: 'Introduce'
        },
        component: introduce
      },
      {
        path: '/color',
        name: 'colorMd',
        meta: {
          title: 'Color-色彩'
        },
        component: colorMd
      },
      {
        path: '/button',
        name: 'buttonMd',
        meta: {
          title: 'Button-按钮'
        },
        component: buttonMd
      },
      {
        path: '/paginationMd',
        name: 'paginationMd',
        meta: {
          title: 'Pagination-分页'
        },
        component: paginationMd
      },
      {
        path: '/messageMd',
        name: 'messageMd',
        meta: {
          title: 'Message-消息'
        },
        component: messageMd
      },
      {
        path: '/collapseMd',
        name: 'collapseMd',
        meta: {
          title: 'Collapse-折叠'
        },
        component: collapseMd
      }]
  },
  {
    path: '*',
    redirect: '/'
  }]
})

export default router

