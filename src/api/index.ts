import request from "../utils/request"

const api = {
    getArticleListAll() {
        return request(`/api/list/all`)
    },
    getArticleListPage(page: string | number) {
        return request(`/api/list/page/${page}`)
    },
    getArticleDetail(id : string | number) {
        return request(`/api/article/${id}`)
    }
}

export default api