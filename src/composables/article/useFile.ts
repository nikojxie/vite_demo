import api from '@/api/index'
import {toRefs, reactive, onMounted} from 'vue'

export default function useList() {
    // 构造骨架屏结构
    const paragraphWidth = []
    const paragraphRows = 20
    for (let i = 1; i <= paragraphRows; i++) {
        if (i % 4 === 1) {
            paragraphWidth.push(300)
        } else {
            paragraphWidth.push(600)
        }
    }
    const paragraph = {rows: paragraphRows, width: paragraphWidth}

    const articleFile = reactive({
        file: {},
        loading: false,
        paragraph
    })

    const init = async () => {
        articleFile.loading = true
        const res = await api.getArticleFile()
        articleFile.file = res.data
        articleFile.loading = false
    }

    onMounted(init)
    return {
        ...toRefs(articleFile)
    }
}