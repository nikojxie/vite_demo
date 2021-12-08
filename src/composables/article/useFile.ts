import api from '../../api/index'
import {ref, onMounted, watch} from 'vue'

export default function useList() {
    const file = ref({})
    const loading = ref(false)
    const paragraphWidth = []
    const paragraphRows = 20
    for(let i = 1; i <= paragraphRows; i++){
        // paragraphWidth.push(300 + (i % 4 - 1) * 100)
        if(i % 4 === 1){
            paragraphWidth.push(300)
        }else {
            paragraphWidth.push(600)
        }
    }
    const paragraph = {rows:paragraphRows, width: paragraphWidth}
    const init = async () => {
        loading.value = true
        const res = await api.getArticleFile()
        file.value = res
        loading.value = false
    }
    onMounted(init)
    return {
        loading,
        file,
        paragraph
    }
}