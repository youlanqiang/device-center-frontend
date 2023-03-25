import { createRouter, createWebHistory, RouteRecordRaw, Router } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../views/index/index.vue')
    },
    {
        path: '/building',
        component: () => import('../views/building/index.vue')
    },
    {
        path: '/zone',
        component: () => import('../views/zone/index.vue')
    },
    {
        path: '/floor',
        component: () => import('../views/floor/index.vue')
    }

]

const router: Router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router