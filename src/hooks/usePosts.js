import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../store/actions/postsActions";
import { setIsPage } from "../store/slices/postsSlice";


export function usePosts(page) {
    const posts = useSelector(state => state.postsSlice.posts)
    const infoPage = useSelector(state => state.postsSlice.infoPage)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setIsPage(page))
        dispatch(getPosts(infoPage.limit, page, infoPage.filter, infoPage.order, infoPage.search))
    }, [infoPage])

    return { posts, infoPage }
}