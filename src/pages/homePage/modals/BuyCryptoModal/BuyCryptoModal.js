import './BuyCryptoModal.scss';
import { Modal, Row, Col } from 'antd';
import Button from '../../../../components/Button/Button';
import Input from '../../../../components/Input/Input';
import { useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import * as _ from 'lodash';
import { useMetaMask } from "metamask-react";
import apiService from '../../../../service/apiService';
import notify from '../../../../ex/notify';

const service = new apiService()



const BuyCryptoModal = ({
    visible,
    close
}) => {
    const { status, connect, account, chainId, ethereum } = useMetaMask();
    const {token} = useSelector(s => s)
    const {userInfo} = useSelector(state => state)
    const [load, setLoad] = useState(false)
    const [value, setValue] = useState('');
    const [startConnect, setStartConnect] = useState(false)
    const [mmWallet, setMmWallet] = useState('')

    const closeHandle = () => {
        close()
        setValue('')
        setMmWallet('')
        setStartConnect(false)
    }

    useEffect(() => {
        if(status === 'connected' && startConnect && account) {
            setMmWallet(account)
        } else {
            setMmWallet('')
        }
    }, [status, startConnect, account])



    const onSave = () => {
        setLoad(true)
        const body = {
            CountCrypto: value,
            Wallet: mmWallet
        }
        service.outputTransaction(token, body).then(res => {
            console.log(res)
            if(res?.Error) {
                if(res?.Error === 'No required quantity MPI on balance') {
                    notify('Не хватает mpi на балансе для вывода', 'ERROR')
                }
                if(res?.Error === 'No link to application') {
                    notify('Личный кабинет не связан с приложением', 'ERROR')
                }
                if(res?.Error === 'Count is less than allowed') {
                    notify('Количество для вывода меньше допустимого', 'ERROR')
                } 
                if(res?.Error === 'No user wallet') {
                    notify('Не задали кошелёк', 'ERROR')
                }
                if(res?.Notice) {
                    notify('Транзакция создана', 'SUCCESS')
                    closeHandle()
                } 
            }
        }).finally(_ => {
            setLoad(false)
            
        })
    }



    return (
        <Modal
            width={600}
            open={visible}
            onCancel={closeHandle}
            className={"Modal BuyCryptoModal"}
            > 
            <div className="Modal__in BuyCryptoModal__in">
                <div className="BuyCryptoModal__head">
                    <h2 className="Modal__title center BuyCryptoModal__head_title">вывод крипты</h2>
                    <div className="BuyCryptoModal__head_ex">
                    Вы не можете вывести крипту на биржу. Можно вывести только на свой кошелек.
                    </div>
                </div>
                <div className="BuyCryptoModal__body">
                    <Col span={24}>
                        <Row gutter={[35, 35]}>
                            <Col span={24}>
                                <div className="BuyCryptoModal__body_main">
                                    <Row gutter={[35,35]}>
                                        <Col span={12}>
                                            <div className="BuyCryptoModal__body_main_inp">
                                                <Input
                                                    label={
                                                        <>
                                                            <div>Сумма вывода</div>
                                                            <div className="BuyCryptoModal__body_main_ex">
                                                                Доступно: <span>{_.round(userInfo?.MPIforOutput, 2)} MPI</span>
                                                            </div>
                                                        </>
                                                    }
                                                    placeholder={'0'}
                                                    value={value}
                                                    onChange={e => setValue(e.target.value)}
                                                    />
                                            </div>
                                        </Col>
                                        <Col span={12}>
                                            <div className="BuyCryptoModal__body_main_inp">
                                                <Input
                                                    readOnly={true}
                                                    label={
                                                        <>
                                                            <div>Будет зачислено</div>
                                                            <div className="BuyCryptoModal__body_main_ex">
                                                                Курс на вывод: <span>{userInfo?.HardcoinTokenPrice} USDT</span>
                                                            </div>
                                                        </>
                                                    }
                                                    value={value * Number(userInfo?.HardcoinTokenPrice)}
                                                    placeholder={'0'}
                                                    />
                                            </div>
                                        </Col>
                                    </Row>
                                    
                                    
                                </div>
                            </Col>
                            <Col span={24}>
                                <Row gutter={[2,2]}>
                                    <Col span={24}>
                                        <div className="BuyCryptoModal__body_net">Сеть bit20</div>
                                    </Col>
                                    <Col span={24}>
                                        <Input
                                            value={mmWallet}
                                            onChange={e => setMmWallet(e.target.value)}
                                            placeholder={'0'}
                                            label={'Введите номер кошелька'}
                                            />
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={24}>
                                <div className="BuyCryptoModal__action">
                                    <div className="BuyCryptoModal__action_item">
                                        <Button
                                            load={status === 'initializing' || status === 'connecting'}
                                            onClick={() => {
                                                connect()
                                                setStartConnect(true)
                                            }}
                                            disabled={status === 'unavailable'}
                                            text={'Подтянуть из metamask'}
                                            disableTextTransform={true}
                                            />
                                    </div>
                                    <div className="BuyCryptoModal__action_item">
                                        <Button
                                            disabled={!mmWallet || !value}
                                            onClick={onSave}
                                            load={load}
                                            variant='default-fill'
                                            text={'Отправить запрос'}
                                            disableTextTransform={true}
                                            />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </div>
                    
            </div>   

        </Modal>
    )
}

export default BuyCryptoModal;