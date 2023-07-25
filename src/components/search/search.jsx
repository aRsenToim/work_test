import { useState } from 'react'
import s from './search.module.scss'

const Search = (props) => {
    const [search, setSearch] = useState('')
    return <div className={s.Search}>
        <input type="text" value={search} onChange={(e) => {
            console.log(1);
            setSearch(e.currentTarget.value)
            props.setSearch(e.currentTarget.value)
        }} placeholder='Поиск' className={s.Search__input} />
        <img src="/img/search.svg" alt="" />
    </div>
}

export default Search