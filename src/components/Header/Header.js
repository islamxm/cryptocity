import './Header.scss';
import Layout from '../Layout/Layout';
import { Link } from 'react-router-dom';
import { Dropdown } from 'antd';
import logo from '../../assets/img/logo.svg';
import Container from '../Container/Container';
import {FiArrowDownRight} from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { langAction } from '../../store/actions';
import HeaderLangDrop from './components/HeaderLangDrop/HeaderLangDrop';
import { useEffect, useState } from 'react';
import {FiChevronDown} from 'react-icons/fi';
import {tokenUpdate} from '../../store/actions';
import { useNavigate, useLocation } from 'react-router-dom';
import { mobMenuToggle } from '../../store/actions';
import LogoutConfirmModal from '../../modals/LogoutConfirmModal/LogoutConfirmModal';
import apiService from '../../service/apiService';
import Cookies from 'js-cookie';


const service = new apiService();


const Header = () => {
    const {lang, mobMenu, token} = useSelector(state => state);
    const dispatch = useDispatch();
    const nav = useNavigate();
    const loc = useLocation();
    const [logoutModal, setLogoutModal] = useState(false)
    const openLogoutModal = () => setLogoutModal(true)
    const closeLogoutModal = () => setLogoutModal(false)

    useEffect(() => {
        dispatch(mobMenuToggle(false))
    }, [loc])


    const selectLang = (val) => {
        dispatch(langAction(val))
    } 


    const handleLogout = () => {
        service.logout(token).then(res => {
            if(res == 'Ok') {
                dispatch(tokenUpdate(null))
                Cookies.remove('cryptocity-lk-token');
                nav('/auth', {replace: true})
                window.location.reload();
            } else {
                //какое то действие если не удалось выйти
            }
        })
        
    }

    const toggleMobMenu = () => {
        dispatch(mobMenuToggle(!mobMenu))
    }

    return (
        <header className="Header">
            <LogoutConfirmModal visible={logoutModal} logout={handleLogout} close={closeLogoutModal}/>
            <Container>
                <div className="Header__in">
                    <a href="#" className="Header__logo">
                        <img src={logo} alt="Crypto-City" />
                    </a>
                    <div className="Header__menu">
                        <div className="Header__menu_nav">
                            <Link className="Header__menu_nav_item" to={'/'}>О нас</Link>
                            <Link className="Header__menu_nav_item" to={'/'}>Проекты</Link>
                            <Link className="Header__menu_nav_item" to={'/'}>Вывод крипты</Link>
                        </div>
                        <div className="Header__menu_auth">
                            <button onClick={openLogoutModal} className="Header__menu_auth_btn">
                                <div className="Header__menu_auth_btn_text">Выйти</div>
                                <div className="Header__menu_auth_btn_icon">
                                    <FiArrowDownRight/>
                                </div>
                            </button>
                        </div>
                        <Dropdown
                            trigger={['click']}
                            overlay={<HeaderLangDrop onSelect={selectLang} value={lang}/>}
                            >
                            <div className="Header__menu_lang">
                                {lang}
                                <div className="Header__menu_lang_icon">
                                <FiChevronDown/>
                                </div>
                                
                            </div>
                        </Dropdown>
                        <div className="Header__menu_burger">
                            <button onClick={toggleMobMenu} className={"Header__menu_burger_btn" + (mobMenu ? ' active ' : '')}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header;