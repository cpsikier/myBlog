/**
 * 入口文件
 */
import { createApp } from 'vue'
import App from './App.vue'
// 导入路由文件
import router from './router';
// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入全局样式
import './assets/css/index.scss'
// 引入unocss
import 'uno.css';

// 注册路由/elementplus
createApp(App).use(router).use(ElementPlus).mount('#app')
