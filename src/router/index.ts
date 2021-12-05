import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        meta: {
            keepalive: true
        },
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

router.beforeEach((to, from, next) => {
    if (!(to.meta.keepalive)) {
        window.scrollTo(0, 0)
    }
    next();
})

export default router