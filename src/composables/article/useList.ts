import api from '../../api/index'
import {ref, onMounted, watch} from 'vue'

export default function useList() {
    const list:{value : any[], [propName : string] : any} = ref([])
    const page = ref(1)
    const totalRows = ref(0)
    list.value.length = 10 // 默认给10的长度 骨架屏展示
    list.value.fill({})
    const loading = ref(false)
    const getList = async () => {
        loading.value = true
        const res = await api.getArticleListPage(page.value)
        totalRows.value = res.totalRows
        list.value = res.list
        loading.value = false
    }
    onMounted(getList)
    return {
        list,page,totalRows,
        loading,
        getList
    }
}