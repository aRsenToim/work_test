import Header from '../header/header'
import s from './posts.module.scss'

const PostsComponent = (prosp) => {
    return <div className={s.PostsComponent}>
        <Header isFilter={prosp.isFilter} setSort={prosp.setSort} order={prosp.order}/>
        <table className={s.Posts}>
            {prosp.posts?.map(el => <tr className={s.Posts__section} key={el.id}>
                <td className={s.Posts__data}>{el.id}</td>
                <td>{el.title}</td>
                <td>{el.body}</td>
            </tr>)}
        </table>
    </div>
}

export default PostsComponent