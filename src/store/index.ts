import  { defineStore } from 'pinia';
import type { MenuRow, MenuRouteRow } from '@/views/layout/typings';
import { getMenus } from '@/api';
import { ElMessage } from 'element-plus';

export const useStore = defineStore('useStore', {
  state: () => {
    return {
      menus: { // 菜单
        tab: [] as MenuRow[],
      },
      routers: [] as MenuRouteRow[],
    }
  },
  actions: {
    // 获取菜单
/*     async getMenus() {
      try {
        const { code, message, data } = await getMenus();
        if (code || _.isNil(data) || _.isEmpty(data)) {
          ElMessage.error(message || '获取菜单失败');
          return [];
        }
        const [sidebar, tab, third] = [[], [], []] as MenuRouteRow[][];
        _.forEach(data, (menu: MenuRow) => {
          if (menu.level === 1) {
            sidebar.push(menu);
            return;
          }
          if (menu.level === 2) {
            tab.push(menu);
            return;
          }
          if (menu.level === 3) {
            third.push(menu);
            return;
          }
        });
        this.menus = { all: data, sidebar, tab, third };
        return data;
      } catch (err) {
        console.log(`[log] - getMenus - err:`, err);
        return [];
      }
    },

        // 生成路由
        async generateRoutes() {
          try {
            const menus = await this.getMenus();
            const tree = listToTree(menus);
            const routes = filterAsyncRouter(tree);
    
            this.routers = routes;
            // 错误页面
            const errorPage = {
              path: '*',
              name: 'error',
              component: componentMap.error,
            };
            // 首页重定向
            const [first] = routes;
            const redirect = first.redirect || first.path || '/DashboardIndex';
            // 加上布局容器
            const asyncRouterMap = [
              {
                path: '/',
                name: 'Home',
                redirect,
                component: () => import('@/views/layout/index.vue'),
                children: [
                  {
                    path: '/licenseCfg',
                    name: 'LicenseCfg',
                    component: () => import('@/views/layout/components/Header/LicenseCfg.vue'),
                  },
                  ...routes,
                  errorPage,
                ],
              },
            ];
            this.homePage = asyncRouterMap[0];
            return asyncRouterMap;
          } catch (error) {
            return Promise.reject(error);
          }
        },
    
        // 获取 tab 栏菜单
        filterTabMenusByPid(sidbarId: number) {
          return this.menus.tab.filter((menu) => menu.pid === sidbarId);
        }, */
  }
})