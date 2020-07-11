import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },



  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/server/wuliji',
  //   meta: { title: '服务器', icon: 'example' },
  //   children: [{
  //     path: '/server/wuliji',
  //     name: 'wuliji',
  //     component: () => import('@/views/server/wuliji'),
  //     meta: { title: '物理机', icon: 'table' }
  //   },
  //   {
  //     path: '/server/xuniji',
  //     name: 'xuniji',
  //     component: () => import('@/views/server/xuniji'),
  //     meta: { title: '虚拟机', icon: 'tree' }
  //   }]
  // },
  // {
  //   path: '/internet',
  //   component: Layout,
  //   redirect: '/internet/jiaohuanji',
  //   meta: { title: '网络设备', icon: 'example' },
  //   children: [{
  //     path: '/internet/jiaohuanji',
  //     name: 'jiaohuanji',
  //     component: () => import('@/views/internet/jiaohuanji'),
  //     meta: { title: '交换机', icon: 'table' }
  //   },
  //   {
  //     path: '/internet/luyouqi',
  //     name: 'luyouqi',
  //     component: () => import('@/views/internet/luyouqi'),
  //     meta: { title: '路由器', icon: 'tree' }
  //   }]
  // },
  // {
  //   path: '/storage',
  //   component: Layout,
  //   redirect: '/storage/common',
  //   meta: { title: '存储设备', icon: 'el-icon-platform-eleme' },
  //   children: [{
  //     path: '/storage/common',
  //     name: 'common',
  //     component: () => import('@/views/storage/common'),
  //     meta: { title: '通用', icon: 'table' }
  //   },{
  //     path: '/storage/common',
  //     name: 'common',
  //     component: () => import('@/views/storage/common'),
  //     meta: { title: '通用', icon: 'table' }
  //   },{
  //     path: '/storage/common',
  //     name: 'common',
  //     component: () => import('@/views/storage/common'),
  //     meta: { title: '通用', icon: 'el-icon-sort' }
  //   }]
  // },

  {
    path: '/',
    component: Layout,
    redirect: '/system/alert',
    meta: { title: '我的系统', icon: 'example (2)' },
    children: [{
      path: '/system/alert',
      name: 'alert',
      component: () => import('@/views/system/alert'),
      meta: { title: '系统告警', icon: 'gaojing' }
    },
    {
      path: '/system/maintenance',
      name: 'maintenance',
      component: () => import('@/views/system/maintenance'),
      meta: { title: '系统维保', icon: 'banshou' }
    }]
  },
  {
    path: '/work/sheet',
    component: Layout,
    component: () => import('@/views/work/sheet'),
    meta: { title: '我的工单', icon: 'gongdan' }
  },
  {
    path: '/inspection',
    component: Layout,
    redirect: '/inspection/my',
    meta: { title: '我的巡检', icon: 'xuncha' },
    children: [{
      path: '/inspection/my',
      name: 'common',
      component: () => import('@/views/inspection/my'),
      meta: { title: '系统巡检', icon: 'ban' }
    },{
      path: '/inspection/system',
      name: 'common',
      component: () => import('@/views/inspection/system'),
      meta: { title: '历史记录', icon: 'wenb' }
    },{
      path: '/inspection/automation',
      name: 'automation',
      component: () => import('@/views/inspection/automation'),
      meta: { title: '自动化巡检', icon: 'example' }
    }]
  },
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/server/wuliji',
  //   name: 'server',
  //   meta: { title: '服务器', icon: 'example' },
  //   children: [
  //     {
  //       path: 'wuliji',
  //       name: 'wuliji',
  //       component: () => import('@/views/server/wuliji'),
  //       meta: { title: '物理机', icon: 'table' }
  //     },
  //     {
  //       path: 'xuniji',
  //       name: 'xuniji',
  //       component: () => import('@/views/server/wuliji'),
  //       meta: { title: '虚拟机', icon: 'tree' }
  //     }
  //   ]
  // },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: 'table', icon: 'example' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'tree', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: 'Tree', icon: 'tree' }
  //     }
  //   ]
  // },

  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: 'Example', icon: 'example' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'Table', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: 'Tree', icon: 'tree' }
  //     }
  //   ]
  // },

  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: 'Form', icon: 'form' }
  //     }
  //   ]
  // },

  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: 'Nested',
  //     icon: 'nested'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: 'Menu1' },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'Menu1-1',
  //           meta: { title: 'Menu1-1' }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: { title: 'Menu1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: { title: 'Menu1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: { title: 'Menu1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: { title: 'Menu1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       meta: { title: 'menu2' }
  //     }
  //   ]
  // },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
