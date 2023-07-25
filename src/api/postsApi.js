import { $api } from "./api"


export const postsApi = {
    async getPosts(limit, page, sort, isSort, text){
        const order = isSort ? 'desc' : 'asc'
        const {data} = await $api.get(`?_limit=${limit}&_page=${page}&_sort=${!sort ? '' : sort}&_order=${!isSort ? '' : order}${!+text && text ? `&q=${text}` : ''}${+text && text ? `&id=${text}` : ''}`)
        return data
    },
}