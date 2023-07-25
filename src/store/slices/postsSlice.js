import { createSlice } from "@reduxjs/toolkit";


const postsSlice = createSlice({
    name: 'postsSlice',
    initialState: {
        posts: null,
        erorr: null,
        infoPage: {
            isPage: 1,
            limit: 10,
            countPage: 10,
            search: null,
            filter: null,
            order: null
        }
    },
    reducers: {
        setPosts(state, { payload }) {
            state.posts = payload
        },
        setIsPage(state, { payload }) {
            state.infoPage.isPage = payload
        },
        setSearch(state, { payload }) {
            state.infoPage.search = payload
        },
        setIsFilter(state, {payload}){
            state.infoPage.filter = payload
        },
        setError(state, { payload }) {
            state.erorr = payload
        },
        setOrder(state){
            state.infoPage.order = state.infoPage.order ? false : true
        }
    }
})

export default postsSlice.reducer
export const { setPosts, setIsPage, setError, setSearch, setIsFilter, setOrder } = postsSlice.actions