import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/router';
import Link from "next/link"
// import Cookies from 'universal-cookie';
import WidgetsIcon from '@mui/icons-material/Widgets';
import sidebarNav from '../../configs/sidebarNav'

export default function Sidebar() {
    const [activeIndex, setActiveIndex] = useState(0)
    const router = useRouter()
    const location = router.pathname
    // let navigate = useNavigate();
    // const cookies = new Cookies();

    useEffect(() => {
        const curPath = window.location.pathname.split('/dashboard')[1]
        const curPathWithDashboard = 'dashboard' + curPath
        const activeItem = sidebarNav.findIndex(item => item.section === curPathWithDashboard)
        setActiveIndex(curPath.length === 0 ? 0 : activeItem)
    },[location])

    const closeSidebar = () => {
        document.querySelector('.main__content').style.transform = 'scale(1) translateX(0)'
        document.querySelector('.main__content').style.borderRadius = "0"
        setTimeout(() => {
            document.body.classList.remove('sidebar-open')
            document.querySelector('.main__content').style = ''
        }, 500)
    }

    // const Logout = () => {
    //     cookies.remove('token')
    //     cookies.remove('user')
    //     navigate(`/admin`);
    // }
  return (
    <div className="sidebar">
        <div className="sidebar__logo">
            <WidgetsIcon />
            <div className="sidebar-close" onClick={closeSidebar}>
                <i className="bx bx-x"></i>
            </div>
        </div>
        <div className="sidebar__menu">
            {
                sidebarNav.map((nav, index) => (
                    // <Link href={nav.link} key={`nav-${index}`} className={`sidebar__menu__item ${activeIndex === index && 'active'}`} onClick={closeSidebar}>
                    //     <div className='sidebar__menu__item__icon'>
                    //         {nav.icon}
                    //     </div>
                    //     <div className="sidebar__menu__item__txt">
                    //         {nav.text}
                    //     </div>
                    // </Link>
                    <Link href={nav.link} key={`nav-${index}`}>
                        <a className={`sidebar__menu__item ${activeIndex === index && 'active'}`} onClick={closeSidebar}>
                            <div className='sidebar__menu__item__icon'>
                                {nav.icon}
                            </div>
                            <div className="sidebar__menu__item__txt">
                                {nav.text}
                            </div>
                        </a>
                    </Link>
                ))
            }
            <div className="sidebar__menu__item">
                <div className="sidebar__menu__item__icon">
                    <i className="bx bx-log-out"></i>
                </div>
                {/* <div className="sidebar__menu__item__txt" onClick={Logout}> */}
                <div className="sidebar__menu__item__txt">

                    Logout
                </div>
            </div>
        </div>
    </div>
  )
}
