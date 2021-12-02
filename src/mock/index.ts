import { MockMethod } from 'vite-plugin-mock'
export default [
    {
        url: '/mock/getList',
        method: 'get',
        response: () => {
            return {
                code: 0,
                message: 'success',
                data: ['aa', 'bb']
            }
        }
    },
] as MockMethod[]