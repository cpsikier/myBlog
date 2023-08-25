import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
// 配置图标
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';

import path from 'path'; // 需安装 @type/node
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Unocss()],
  // 配置别名
  resolve: {
	 alias: {
		  '@': path.resolve('./src') // @代替src
	  }
  },
})
