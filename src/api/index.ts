import request from "../utils/request"

const api = {
    getList() {
        return request('/api/content')
    }
}

export default api