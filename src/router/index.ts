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
      }
    ]
  }
]

const router = createRouter({
  history:createWebHashHistory(),
  routes
})

export default router
