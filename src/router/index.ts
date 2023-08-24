/**
 * 路由入口文件
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
// 引入页面
import Home from '@/views/home/HomeIndex.vue';
import Login from '@/views/login/LoginIndex.vue';
import OnePage from '@/views/one/OneIndex.vue';
// import TemplateOne from '../views/one/OneIndex1.vue';

// 1.配置路由
const routes: RouteRecordRaw[] = [
	{
		path: '/', // 默认路由页面
		component: Login,
		
	},
	{
		name: 'Login',
		path: '/login',
		component: Login,
		meta: {
			title: '登录'
		}
	},
	{
		name: 'Home',
		path: '/home',
		component: Home,
		meta: {
			title: '首页'
		}
	},
	{
		name: 'One',
		path: '/one',
		component: OnePage,
		meta: {
			title: '模块一'
		},
/* 		children: [
			{
				name: 'TemplateOne',
				path: 'templateOne',
				meta: { title: '模块1-1'}
			}
		], */
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