import { postsApi } from "../../api/postsApi"
import { setError, setPosts } from "../slices/postsSlice"


export const getPosts = (limit, page, sort, isSort, text) => {
    return dispatch => {
        postsApi.getPosts(limit, page, sort, isSort, text).then(data => {
            dispatch(setPosts(data))
        }).catch(err => dispatch(setError(err.message)))
    }
}