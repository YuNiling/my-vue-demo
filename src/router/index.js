import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import One from '@/components/One'
import Two from '@/components/Two'
import Count from '@/components/Count'
import Table from '@/components/Table'
import ArchiveManage from '@/components/manage/ArchiveManage'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/one',
          component: One,
          alias: '/oneother',
          beforeEnter: (to, from, next) => {
            console.log('进入前执行')
            next()
          }
        }, {
          path: '/home/two/:id/:name',
          component: Two
        }, {
          path: '/home/three/:id/:name',
          name: 'three',
          redirect: '/home/two/:id/:name'
        }, {
          path: '/count',
          component: Count
        }, {
          path: '/table',
          component: Table
        }, {
          path: '/manage/archiveManage',
          component: ArchiveManage
        }
      ]
    }, {
      path: '*',
      component: () => import('@/components/404')
    }
  ]
})

// 全局路由拦截--进入页面前执行
router.beforeEach((to, from, next) => {
  // 这里可以加入全局登录判断
  // 继续执行
  // console.log('全局执行')
  next()
})

// 全局后置钩子--常用于结束动画等
router.afterEach(() => {
  // 不接受next
})

export default router
