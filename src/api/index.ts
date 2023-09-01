export function getMenus() {
  return {
    data: [
      {
        path: '/', // 默认路由页面
        name: 'layout',
        component: () => import('@/views/layout/LayoutIndex.vue'),
        meta: {
          title: '',
        }
      },
      {
        name: 'Home',
        path: '/home',
        component: () => import('@/views/home/HomeIndex.vue'),
        meta: {
          title: '首页'
        }
      },
      {
        name: 'Article',
        path: '/article',
        component: () => import('@/views/article/ArticleIndex.vue'),
        meta: {
          title: '文章'
        },
      },
    ]
  }
}