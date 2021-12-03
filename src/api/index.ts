import request from "../utils/request"

const api = {
    getArticleList() {
        return request(`/api/list/all`)
    },
    getArticleDetail(id) {
        return request(`/api/article/${id}`)
    }
}

export default api