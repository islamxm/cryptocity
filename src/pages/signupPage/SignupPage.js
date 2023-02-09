import './SignupPage.scss';
import contentEnterAnimProps from '../../ex/contentEnterAnimProps';
import PageLayout from '../../components/PageLayout/PageLayout';
import {motion} from 'framer-motion';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { useSelector } from 'react-redux';
import apiService from '../../service/apiService';
import { useState } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import notify from '../../ex/notify';
import PasswordStrengthBar from 'react-password-strength-bar';
import CustomPassStrength from '../../components/CustomPassStrength/CustomPassStrength';
const service = new apiService();


const authResTypes = {
    error: 'WrongMailOrPass',
    notfound: 'UserNotFound',
    userexist: 'UserExist',
    mailerror: 'EmailError',
    sendmail: 'LinkSendToMail',
}


const SignupPage = () => {
    const [mail, setMail] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState('')
    const [load, setLoad] = useState(false)
    const [passStrength, setPassStrength] = useState(0);

    const onSubmit = () => {
        setLoad(true)
        const body = {
            mail: mail,
            password: pass
        }

        service.registration(body).then(res => {
            console.log(res)
            switch(res) {
                case authResTypes.error: 
                    setError('Неверный e-mail или пароль');
                    notify('Неверный e-mail или пароль')
                    break;
                case authResTypes.notfound:
                    setError('Пользователь с такими данными не найден')
                    notify('Пользователь с такими данными не найден')
                    break;
                case authResTypes.userexist:
                    setError('Пользователь с таким e-mail уже существует')
                    notify('Пользователь с таким e-mail уже существует')
                    break;
                case authResTypes.mailerror:
                    setError('Произошла ошибка. Сообщение не отправлено')
                    notify('Произошла ошибка. Сообщение не отправлено')
                    break;
                case authResTypes.sendmail:
                    setError('')
                    notify('На вашу почту отправлена ссылка для авторизации')
                    break;
                default:
                    setError('')
                    break;
            }
        }).finally(_ => {
            setLoad(false)
        })
        
        
    }


    return (
        <div className="page SignupPage">
            <ToastContainer />
            <PageLayout>
                <motion.div className='SignupPage__in' {...contentEnterAnimProps}>
                    <div className="SignupPage__body">
                    <div className="SignupPage__body_head">Регистрация</div>
                        <div className="SignupPage__body_form">
                            <Row gutter={[20,20]}>
                                <Col span={24}>
                                    <Input
                                        type='email'
                                        error={error}
                                        hideErrorText={true}
                                        value={mail}
                                        onChange={e => setMail(e.target.value)}
                                        placeholder={'E-mail'}
                                        />
                                </Col>
                                <Col span={24}>
                                    <Input
                                        error={error}
                                        hideErrorText={true}
                                        onChange={e => setPass(e.target.value)}
                                        type='password'
                                        value={pass}
                                        placeholder={'Ваш пароль'}
                                        />
                                    <CustomPassStrength value={passStrength}/>
                                    <PasswordStrengthBar
                                         minLength={8}
                                         onChangeScore={e => {
                                             setPassStrength(e)
                                         }}
                                         className='password-strength'
                                         style={{marginTop: '20px'}}
                                         scoreWords={['Очень слабый', 'Слабый', 'Нормальный', 'Нормальный', 'Надежный']}
                                         shortScoreWord={'Очень короткий'}
                                         password={pass}
                                        />
                                </Col>
                                <Col span={24}>
                                    <div className="SignupPage__body_form_link">
                                        Есть аккаунт? <Link to={'/auth'}>Войти</Link>
                                    </div>
                                </Col>
                                <Col span={24}>
                                    <div className="SignupPage__body_form_action">
                                    <Button
                                        disabled={!mail || !pass || passStrength !== 4}
                                        text={'Регистрация'}
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


export default SignupPage;