import api from '@/api/index'
import {reactive, onMounted, watch} from 'vue'

export default function useList() {
    const list = reactive([])
    list.value.length = 10 // 默认给10的长度 骨架屏展示
    list.value.fill({})
    const loading = ref(false)
    const init = async () => {
        loading.value = true
        list.value = await api.getArticleList()
        loading.value = false
    }
    onMounted(init)
    return {
        list,
        loading,
        init
    }
}