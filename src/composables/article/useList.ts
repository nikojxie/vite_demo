import api from '@/api/index'
import {toRefs, reactive, onMounted} from 'vue'

export default function useList() {
    const initList: unknown[] = []
    initList.length = 10
    initList.fill({})
    const articleList = reactive({
        list: initList,
        page: 1,
        totalRows: 0,
        loading: false,
    })
    const getList = async (page = 1) => {
        if(page) articleList.page = page
        articleList.loading = true
        const res = await api.getArticleListPage(articleList.page)
        articleList.totalRows = res.data.totalRows
        articleList.list = res.data.list
        articleList.loading = false
    }
    onMounted(getList)
    return {
        ...toRefs(articleList),
        getList
    }
}