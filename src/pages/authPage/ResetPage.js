import './AuthPage.scss';
import contentEnterAnimProps from '../../ex/contentEnterAnimProps';
import PageLayout from '../../components/PageLayout/PageLayout';
import {motion} from 'framer-motion';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { useSelector } from 'react-redux';
import apiService from '../../service/apiService';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import {tokenUpdate} from '../../store/actions';
import { useNavigate } from 'react-router-dom';
import notify from '../../ex/notify';
import { ToastContainer } from 'react-toastify';
const service = new apiService();


const authResTypes = {
    error: 'WrongMailOrPass',
    notfound: 'UserNotFound',
    userexist: 'UserExist',
    success: 'LinkSendToMail'
}


const ResetPage = () => {
    const disaptch = useDispatch()
    const nav = useNavigate();
    //const {token} = useSelector(state => state)
    const [pass, setPass] = useState('')
    const [mail,setMail] = useState('')
    const [load, setLoad] = useState(false)
    const [error, setError] = useState('')


    const onSubmit = () => {
        setLoad(true)
        const body = {
            mail,
            password: pass,
            // isAdmin: 0
        }

        service.resetPass(body).then(res => {
            console.log(res)
            switch(res) {
                case authResTypes.error: 
                    setError('Неверный e-mail или пароль');
                    notify('Неверный e-mail или пароль', 'ERROR')
                    break;
                case authResTypes.notfound:
                    setError('Пользователь с такими данными не найден')
                    notify('Пользователь с такими данными не найден', 'ERROR')
                    break;
                case authResTypes.userexist:
                    setError('Пользователь с таким e-mail уже существует')
                    notify('Пользователь с таким e-mail уже существует', 'ERROR')
                    break;
                case authResTypes.success:
                    setError('')
                    notify('Переходите на почту для подтверждения смены пароля', 'SUCCESS')
                    nav('/auth', {replace: true})
                    break;
                default:
                    console.log(res)
                    return null;
                    // setError('')
                    // Cookies.set('cryptocity-lk-token', res)
                    // disaptch(tokenUpdate(res))
                    // nav('/', {replace: true})
                    // break;
            }
        }).finally(_ => {
            setLoad(false)
        })
    }


    return (
        <div className="page AuthPage">
            <ToastContainer/>
            <PageLayout>
                <motion.div className='AuthPage__in' {...contentEnterAnimProps}>
                    <div className="AuthPage__body">
                        <div className="AuthPage__body_head">Восстановить пароль</div>
                        <div className="AuthPage__body_form">
                            <Row gutter={[20,20]}>
                                <Col span={24}>
                                    <Input
                                        hideErrorText={true}
                                        type='email'
                                        error={error}
                                        value={mail}
                                        onChange={e => setMail(e.target.value)}
                                        placeholder={'E-mail'}
                                        />
                                </Col>
                                <Col span={24}>
                                    
                                    <Input
                                        hideErrorText={true}
                                        error={error}
                                        onChange={e => setPass(e.target.value)}
                                        type='password'
                                        value={pass}
                                        placeholder={'Новый пароль'}
                                        />
                                </Col>
                                {/* <Col span={24}>
                                    <div className="AuthPage__body_form_link">
                                        Нет аккаунта? <Link to={'/signup'}>Регистрация</Link> 
                                    </div>
                                </Col> */}
                                {/* <Col span={24}>
                                    <div className="AuthPage__body_form_link">
                                        Забыли пароль? <Link to={'/auth'}>Восстановить</Link> 
                                    </div>
                                </Col> */}
                                <Col span={24}>
                                    <div className="AuthPage__body_form_action">
                                    <Button
                                        disabled={!mail || !pass}
                                        text={'Восстановить'}
                                        load={load}
                                        onClick={onSubmit}
                                        />
                                    </div>
                                    
                                </Col>
                            </Row>
                        </div>
                    </div>
                </motion.div>
            </PageLayout>
        </div>
    )
}

export default ResetPage;
