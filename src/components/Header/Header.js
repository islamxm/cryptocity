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
import { useEffect } from 'react';
import {FiChevronDown} from 'react-icons/fi';

const Header = () => {
    const {lang} = useSelector(state => state);
    const dispatch = useDispatch();

    const selectLang = (val) => {
        dispatch(langAction(val))
     
    } 

    return (
        <header className="Header">
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
                            <button className="Header__menu_auth_btn">
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
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header;