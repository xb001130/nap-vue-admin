import type { RouteComponent, RouteRecordRaw, RouterMeta } from 'vue-router'

declare global {
  /**
   * @description 路由meta配置
   */
  interface RouterMeta extends CustomizeRouterMeta {
    /** 标题（兼容国际化） */
    title: string
    /** 菜单图标 */
    icon?: string
    /** 是否缓存 */
    isKeepLive?: string
    /** 是否在菜单中显示 */
    isShow?: string
  }
  /**
   * @description 路由完整路由配置
   */
  interface RouteRecordRaw extends RouterConfig {
    /** 路由路径 */
    path: string
    /** 路由名字（保持唯一） */
    name: string
    /** 路由重定向路径 */
    redirect?: string
    /**
     * @namespace 加载组件
     * @description （异步路由中可直接传入路径字符串，如'/system/setnotice/index'，自动转换为 `() => import('~/views/system/setnotice/index.vue')` ）
     * @description 字符串形式只在异步路由中生效
     * @description 静态路由文件baseRoutes.ts请填写该字段
     */
    component?: RouteComponent | string
    meta?: CustomizeRouterMeta
    /** 子路由配置项 */
    children?: Array<RouterConfig>
  }
}
