import api from '../../api/index'
import {ref, onMounted} from 'vue'

export default function useDetail(id: string | number) {
    const detail = ref({})
    const loading = ref(false)
    const init = async () => {
        loading.value = true
        detail.value = await api.getArticleDetail(id)
        loading.value = false
    }
    onMounted(init)
    return {
        detail,
        loading,
        init
    }
}