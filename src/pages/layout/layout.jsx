import { Outlet } from 'react-router-dom'
import s from './layout.module.scss'


const Layout = () => {
    return <div className={s.Layout}>
        <div className={s.content}>
            <Outlet/>
        </div>
    </div>
}

export default Layout