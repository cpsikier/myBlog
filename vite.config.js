import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'; // 需安装 @type/node
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 配置别名
  resolve: {
	 alias: {
		  '@': path.resolve('./src') // @代替src
	  }
  }
})
