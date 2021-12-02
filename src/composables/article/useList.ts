import api from '@/api/index'
import {ref, onMounted, watch} from 'vue'

export default function useList() {
    const list = ref([])
    const init = async () => {
        list.value = await api.getList()
    }
    onMounted(init)
    return {
        list,
        init
    }
}