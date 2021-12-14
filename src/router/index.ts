import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        // 首页 文章列表
        path: '/',
        name: 'home',
        meta: {
            keepalive: true,
            title: '首页'
        },
        component: () => import('@/views/Home.vue')
    },
    {
        // 文章详情
        path: '/article/:id',
        name: 'article-detail',
        meta: {
            title: '文章详情'
        },
        component: () => import('@/views/Article.vue')
    },
    {
        // 文章归档
        path: '/article-file',
        name: 'article-file',
        meta: {
            keepalive: true,
            title: '文章归档'
        },
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