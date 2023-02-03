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
const service = new apiService();



const SignupPage = () => {
    const [mail, setMail] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState('')
    const [load, setLoad] = useState(false)

    const onSubmit = () => {
        setLoad(true)
        const body = {
            email: mail,
            password: pass
        }

        service.registration(body).then(res => {
            console.log(res)
        }).finally(_ => {
            setLoad(false)
        })
    }

    return (
        <div className="page SignupPage">
            <PageLayout>
                <motion.div className='SignupPage__in' {...contentEnterAnimProps}>
                    <div className="SignupPage__body">
                    <div className="SignupPage__body_head">Регистрация</div>
                        <div className="SignupPage__body_form">
                            <Row gutter={[20,20]}>
                                <Col span={24}>
                                    <Input
                                        error={error}
                                        value={mail}
                                        onChange={e => setMail(e.target.value)}
                                        placeholder={'E-mail'}
                                        />
                                </Col>
                                <Col span={24}>
                                    <Input
                                        error={error}
                                        onChange={e => setPass(e.target.value)}
                                        type='password'
                                        value={pass}
                                        placeholder={'Ваш пароль'}
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
                                        disabled={!mail || !pass}
                                        text={'Войти'}
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