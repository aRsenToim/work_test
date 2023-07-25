import { NavLink, Navigate } from 'react-router-dom'
import s from './pagination.module.scss'
import { useEffect, useState } from 'react';

const Pagination = (props) => {
    const [pageSizes, setPageSizes] = useState(null)

    useEffect(() => {
        if (!pageSizes) {
            let arr = []
            for (let index = 1; index !== 11; index++) {
                arr.push(index)
            }
            setPageSizes(arr)
        }
    })
    console.log(props.isPage - 1);
    return <div className={s.Pagination}>
        <NavLink to={`/${props.isPage - 1}`} onClick={() => {props.setPage(props.isPage - 1)}} className={s.Pagination__link}>Назад</NavLink>
        <div className={s.Pagination__buttons}>
            {pageSizes?.map(el => el == props.isPage ? <NavLink to={`/${el}`} className={s.Pagination__button__active} onClick={() => { props.setPage(el) }} key={el}>{el}</NavLink> : <NavLink to={`/${el}`} className={s.Pagination__button} onClick={() => { props.setPage(el) }} key={el}>{el}</NavLink>)}
        </div>
        <NavLink to={`/${props.isPage + 1}`} onClick={() => {props.setPage(props.isPage + 1)}} className={s.Pagination__link}>Далее</NavLink>
    </div>
}

export default Pagination