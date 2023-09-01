
/** vue3 报错提示 找不到模块“./XXX.vue”或其相应的类型声明
 *  报错原因：typescript 只能理解 .ts 文件，无法理解 .vue文件 
 * */
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// 定义 @lodash 模块, 用于解决无法识别 @lodash 模块的问题
declare module '@lodash' {
  export * from 'lodash-es';
}
