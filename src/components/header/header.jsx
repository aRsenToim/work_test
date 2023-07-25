import { useState } from 'react'
import s from './header.module.scss'


const Header = (prosp) => {
    const [data, setData] = useState([
        {
            type: 'id',
            title: 'ID'
        },
        {
            type: 'title',
            title: 'Заголовок'
        },
        {
            type: 'body',
            title: 'Описание'
        },
    ])
    return <div className={s.Header}>
        <ul className={s.Header__btns}>
            {data.map(el => <li key={el.type} className={s.Header__btn} onClick={() => {
                prosp.setSort(el.type)
            }}>
                {el.title}
                {prosp.isFilter == el.type && prosp.order ? <img className={s.Header__btn__img} src="/img/line.svg" alt="" /> : <img src="/img/line.svg" alt="" />}
            </li>)}
        </ul>
    </div>
}

export default Header