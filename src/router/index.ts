import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        // 首页 文章列表
        path: '/',
        name: 'home',
        meta: {
            keepalive: true
        },
        component: () => import('@/views/Home.vue')
    },
    {
        // 文章详情
        path: '/article/:id',
        name: 'article-detail',
        component: () => import('@/views/Article.vue')
    },
    {
        // 文章归档
        path: '/article-file',
        name: 'article-file',
        component: () => import('@/views/ArticleFile.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.afterEach((to, from) => {
    if (!to.meta.keepalive) {
        window.scrollTo(0, 0)
    }
})

export default router