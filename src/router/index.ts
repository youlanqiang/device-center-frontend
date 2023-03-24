import { createRouter, createWebHistory, RouteRecordRaw, Router } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../views/index/index.vue')
    },
    {
        path: '/building',
        component: () => import('../views/building/index.vue')
    }

]

const router: Router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router