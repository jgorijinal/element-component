import { createRouter,createWebHashHistory,RouteRecordRaw} from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: ()=>import('../views/Home.vue')
  }
]

const router = createRouter({
  history:createWebHashHistory(),
  routes
})

export default router
