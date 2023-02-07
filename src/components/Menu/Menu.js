import './Menu.scss';
import { NavLink } from 'react-router-dom';
import {TbUser, TbUsers} from 'react-icons/tb';
import {HiOutlineFolder, HiOutlineFire} from 'react-icons/hi';
import {TiFlashOutline} from 'react-icons/ti';
import {GoSettings} from 'react-icons/go';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { tokenUpdate } from '../../store/actions';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import LogoutConfirmModal from '../../modals/LogoutConfirmModal/LogoutConfirmModal';

const menuList = [
    {label: 'Аккаунт', link: '/', icon: <TbUser/>},
    {label: 'Кошелек', link: '/wallet', icon: <HiOutlineFolder/>},
    {label: 'Referrals', link: '/referals', icon: <TbUsers/>},
    {label: 'Activity', link: '/activity', icon: <TiFlashOutline/>},
    {label: 'NFT', link: '/nft', icon: <HiOutlineFire/>},
    {label: 'Настройки', link: '/settings', icon: <GoSettings/>},
]



const Menu = () => {
    const dispatch = useDispatch();
    const {mobMenu} = useSelector(state => state);
    const nav = useNavigate();
    const [logoutModal, setLogoutModal] = useState(false)
    const openLogoutModal = () => setLogoutModal(true)
    const closeLogoutModal = () => setLogoutModal(false)

    const handleLogout = () => {
        dispatch(tokenUpdate(null))
        Cookies.remove('cryptocity-lk-token');
        nav('/auth', {replace: true})
        window.location.reload();
    }

  

    return (
        <div className={"Menu" + (mobMenu ? ' active ' : '')}>
            <LogoutConfirmModal visible={logoutModal} close={closeLogoutModal} logout={handleLogout}/>
            <div className="Menu__in">
                {
                    menuList?.map((item, index) => (
                        <NavLink 
                            to={item.link} 
                            className={
                                ({isActive}) => isActive ? "Menu__item active" : "Menu__item"
                            }>
                            <div className="Menu__item_icon">{item.icon}</div>
                            <div className="Menu__item_label">{item.label}</div>
                        </NavLink>
                    ))
                }
            </div>
            <div className="Menu__action">
                <button onClick={openLogoutModal} className="Menu__action_btn">
                    Выйти
                </button>
            </div>
        </div>
    )
}

export default Menu;