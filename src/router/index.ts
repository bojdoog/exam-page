import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/title/:id',
    name: 'Title',
    props: true,
    component: () => import('@/views/Questions.vue'),
  },
  {
    path: '/',
    name: 'Begin',
    component: () => import('@/views/begin.vue')
  },
  {
    path: '/end',
    name: 'End',
    component: () => import('@/views/end.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
