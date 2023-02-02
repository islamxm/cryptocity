import './AuthPage.scss';
import contentEnterAnimProps from '../../ex/contentEnterAnimProps';
import PageLayout from '../../components/PageLayout/PageLayout';
import {motion} from 'framer-motion';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { useSelector } from 'react-redux';
import apiService from '../../service/apiService';
import { useState } from 'react';
import { Row, Col } from 'antd';

const service = new apiService();

const authResTypes = {
    error: 'WrongMailOrPass',
    notfound: 'UserNotFound',
}


const AuthPage = () => {
    const {token} = useSelector(state => state)
    const [mail,setMail] = useState('')
    const [pass, setPass] = useState('')
    const [load, setLoad] = useState(false)
    const [mailError, setMailError] = useState('')
    const [passError, setPassError] = useState('')


    const onSubmit = () => {
        setLoad(true)
        const body = {
            mail,
            password: pass
        }

        service.auth(body).then(res => {
            console.log(res)
        }).finally(_ => {
            setLoad(false)
        })
    }


    return (
        <div className="page AuthPage">
            <PageLayout>
                <motion.div className='AuthPage__in' {...contentEnterAnimProps}>
                    <div className="AuthPage__body">
                        <div className="AuthPage__body_head">Войти</div>
                        <div className="AuthPage__body_form">
                            <Row gutter={[20,20]}>
                                <Col span={24}>
                                    <Input
                                        value={mail}
                                        onChange={e => setMail(e.target.value)}
                                        placeholder={'E-mail'}
                                        />
                                </Col>
                                <Col span={24}>
                                    <Input
                                        onChange={e => setPass(e.target.value)}
                                        type='password'
                                        value={pass}
                                        placeholder={'Ваш пароль'}
                                        />
                                </Col>
                                <Col span={24}>
                                    <div className="AuthPage__body_form_action">
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

export default AuthPage;