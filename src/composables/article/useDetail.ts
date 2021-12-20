import api from '@/api/index'
import {toRefs, reactive, onMounted} from 'vue'

export default function useDetail(id: string | number) {
    const articleDetail = reactive({
        detail: {},
        loading: false
    })
    const init = async () => {
        articleDetail.loading = true
        const res = await api.getArticleDetail(id)
        articleDetail.detail = res.data
        articleDetail.loading = false
    }
    onMounted(init)
    return {
        ...toRefs(articleDetail),
        init
    }
}