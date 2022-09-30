import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Container from '../components/container/src/index.vue' 

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Container,
    redirect:'/home',
    children: [
      {
        path: 'home',
        name:'home',
        component:() => import('../views/Home.vue')
      },
      {
        path: 'chooseIcon',
        name:'chooseIcon',
        component:() => import('../views/chooseIcon/index.vue')
      },
      {
        path: 'chooseArea',
        name:'chooseArea',
        component:() => import('../views/chooseArea/index.vue')
      },
      {
        path: 'trend',
        name:'trend',
        component:() => import('../views/trend/index.vue')
      },
      {
        path: 'notification',
        name:'notification',
        component:() => import('../views/notification/index.vue')
      },
      {
        path: 'progress',
        name:'progress',
        component:() => import('../views/progress/index.vue')
      },
      {
        path: 'chooseTime',
        name:'chooseTime',
        component:() => import('../views/chooseTime/index.vue')
      },
      {
        path: 'chooseDate',
        name:'chooseDate',
        component:() => import('../views/chooseDate/index.vue')
      },
      {
        path: 'chooseCity',
        name:'chooseCity',
        component:() => import('../views/chooseCity/index.vue')
      },
    ]
  }
]

const router = createRouter({
  history:createWebHashHistory(),
  routes
})

export default router
