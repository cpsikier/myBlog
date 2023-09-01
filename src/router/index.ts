/**
 * 路由入口文件
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// 引入页面
import Home from '@/views/home/HomeIndex.vue'
import Daily from '@/views/daily/DailyIndex.vue'
import Article from '@/views/article/ArticleIndex.vue'
import About from '@/views/about/AboutIndex.vue'
import Message from '@/views/message/MessageIndex.vue'

// 1.配置路由
const routes: RouteRecordRaw[] = [
  {
    path: '/', // 默认路由页面
    name: 'home',
    component: () => import('@/views/layout/LayoutIndex.vue'),
    meta: {
      title: '首页',
    },
  },
  {
    path: '/layout',
    name: 'Layout',
    component: () => import('@/views/layout/LayoutIndex.vue'),
    children: [
      {
        name: 'Home',
        path: '/home',
        component: Home,
        meta: {
          title: '首页',
        },
      },
      {
        name: 'Article',
        path: '/article',
        component: Article,
        meta: {
          title: '文章',
        },
      },
      {
        name: 'Daily',
        path: '/daily',
        component: Daily,
        meta: {
          title: '日常',
        },
      },
      {
        name: 'AboutMe',
        path: '/aboutMe',
        component: About,
        meta: {
          title: '关于我',
        },
      },
      {
        name: 'Message',
        path: '/message',
        component: Message,
        meta: {
          title: '留言',
        },
      },
    ],
  },
]

// 2.返回一个router 实例，配置history模式
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

// 3.导出路由： 在main.ts中注册
export default router

// 4.在main.js中导入路由文件并注册路由
