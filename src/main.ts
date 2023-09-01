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
// 引入unoCSS
import 'uno.css';
// 引入elementPlus 图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
// 引入pinia
import { createPinia } from 'pinia';


// 注册路由/elementPlus
const app = createApp(App);
// 挂载pinia
const pinia = createPinia();

app.use(router).use(ElementPlus).use(pinia).mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component)
}
