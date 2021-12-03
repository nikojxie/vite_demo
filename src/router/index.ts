import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/article/:id',
        name: 'article-detail',
        component: () => import('@/views/Article.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router