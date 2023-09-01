# 一、项目搭建 
## 1.创建VUE3项目
```
npm create v3-ts-pro
```
## 2. 下载安装pnpm 
```
npm install pnpm -g  (安装pnpm)
pnpm config get registry (查看源)
pnpm config set registry https://registry.npmmirror.com/ (切换淘宝源)
pnpm run serve (运行)
pnpm install 包名称 (安装包)
pnpm add 包名称 (-S 默认写入dependencies)
pnpm add -g/-D  (-g 全局安装，-D devDependencies)
```
## 3. 安装路由vue-router(V3路由版本 vue-router 4.x以上)
```
pnpm install vue-router --save
```
## 4. 安装element plus
```
pnpm install element-plus --save
```
## 5.生成tsconfig.json 文件
TypeScript的编译配置文件，指定待编译文件和定义编译选项
```
tsc --init
```
## 6. 安装sass
```
pnpm install --save-dev sass   (安装)
sass --version   (查看版本)
```
## 7.安装配置unocss
### 1).安装unocss及三个预设(工具栏预设、属性化模式支持、icon支持)
```
pnpm i -D unocss @unocss/preset-uno @unocss/preset-attributify @unocss/preset-icons   (安装unocss)
``` 
### 2).在vite.config.ts中配置
```
	import Unocss from 'unocss/vite'
	export default defineConfig({
		plugins: [Unocss()]
	})
```
### 3).使用
```
1.创建unocss.config.ts 配置文件，编写unocss配置
2.全局引入unocss:   
	import 'virtual:uno.css';
```

## 7.crypto-js 加密
Crypto-js是一个JavaScript加密库，用于提供各种加密算法和工具。它支持常见的加密算法，如AES、DES、Triple DES、Rabbit、RC4等，还包括哈希函数和编码方案等功能。
使用Crypto-js，开发者可以轻松地在浏览器端或Node.js环境中进行数据加密和解密操作，保护数据的安全性。
### 1).安装crypto-js
```
	pnpm install crypto-js
	pnpm install --save-dev @types/crypto-js
```
### 2).新建
src ——	modules —— crypto-js —— aes.ts
### 3).aes.ts文件
		1.设置密钥和密钥偏移量
		2.封装加密/解密算法
### 4).使用
```
import { createAes } from '@/modules/crypto-js/aes';
const Aes = createAes(); // 可设置十六位十六进制数
Aes.encrypt(password) 加密
Aes.decrypt(data) 解密

```

# 二、常用包
## 1. @type/node
node.js环境中使用的包，用于处理和操作JavaScript中各种数据类型。提供了node的常用的语法提示
可以解决编辑器报错`ts在引入其他声明文件包下的模块，遇到找不到对应模块`的问题
```
pnpm install @type/node --save-dev
```

# 三、项目配置
## 1.配置别名
### 1).安装@type/node包
`pnpm install @type/node --save-dev`
### 2).在vite.config.js 文件中配置
```
import path from 'path'; // 需安装@type/node包
// 配置别名
export default defineConfig ({
	resolve: {
		alias: {
			'@': path.resolve('./src'); // @代替src
		}
	}
})

```
### 3).在tsconfig.json文件中配置 compilerOptions-baseUrl、paths
```
baseUrl: "./",
paths: {
	"@/*": ["src/*"]
}
```