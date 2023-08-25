/**
 * 编写unocss配置
 * https://github.com/unocss/unocss
 * 样式查询地址：https://uno.antfu.me/
 */
import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss';

export default defineConfig({
	  // 定义主题变量
	  theme: {
	    colors: {
	      success: '#09be4f',
	      warning: '#ffb703',
	      info: '#aaacb1',
	      error: '#ff2b2b',
	      primary: '#165dff',
	      danger: '#ff2b2b',
	    },
	    spacing: {
	      xss: '4px',
	      xs: '8px',
	      sm: '12px',
	      base: '16px',
	      lg: '24px',
	      xl: '32px',
	    },
	  },
	// 定义规则 rules: [[/^ml-(\d+)$/, ([, d]) => ({ 'margin-left': `${parseInt(d) * 8}px` })]]
	rules: [],
	// 定义简写
	shortcuts: [
		['auto-wrap', 'w-full h-full overflow-auto'], 
		['flex-center', 'flex justify-center items-center'],
	], 
	// 预设，配置预置的配置
	presets: [
		presetUno(),
		presetAttributify(),
		presetIcons()
	],
	// 对现有的规则应用一些变体
	variants: [
		// 使用： hover:xxxx
	  (matcher) => {
	      if (!matcher.startsWith('hover:')) return matcher
	      return {
	        // slice `hover:` prefix and passed to the next variants and rules
	        matcher: matcher.slice(6),
	        selector: (s) => `${s}:hover`
	      }
	    }
	]
})