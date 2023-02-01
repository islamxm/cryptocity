import './Menu.scss';
import { NavLink } from 'react-router-dom';
import {TbUser, TbUsers} from 'react-icons/tb';
import {HiOutlineFolder, HiOutlineFire} from 'react-icons/hi';
import {TiFlashOutline} from 'react-icons/ti';
import {GoSettings} from 'react-icons/go';


const menuList = [
    {label: 'Аккаунт', link: '/', icon: <TbUser/>},
    {label: 'Кошелек', link: '/wallet', icon: <HiOutlineFolder/>},
    {label: 'Referrals', link: '/refs', icon: <TbUsers/>},
    {label: 'Activity', link: '/activity', icon: <TiFlashOutline/>},
    {label: 'NFT', link: '/nft', icon: <HiOutlineFire/>},
    {label: 'Настройки', link: '/settings', icon: <GoSettings/>},
]



const Menu = () => {
    return (
        <div className="Menu">
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
        </div>
    )
}

export default Menu;