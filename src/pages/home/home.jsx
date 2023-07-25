import Pagination from '../../components/pagination/pagination'
import PostsComponent from '../../components/posts/posts'
import Search from '../../components/search/search'
import { usePosts } from '../../hooks/usePosts'
import s from './home.module.scss'
import { setIsFilter, setIsPage, setOrder, setSearch } from '../../store/slices/postsSlice'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'


const Home = () => {
    let {page} = useParams()
    const {posts, infoPage} = usePosts(page ? page : 1)
    const dispatch = useDispatch()
    return <div className={s.Home}>
        <Search setSearch={(text) => {
            dispatch(setSearch(text))
        }} />
        <PostsComponent posts={posts} isFilter={infoPage.filter} order={infoPage.order} setSort={(filter, order) => {    
            dispatch(setIsFilter(filter))
            dispatch(setOrder(order))
        }} />
        <Pagination isPage={+infoPage.isPage} setPage={(page) => {
            dispatch(setIsPage(page))
        }} />
    </div>
}

export default Home