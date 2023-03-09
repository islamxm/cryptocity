import './BuyModal.scss';
import {Modal, Row, Col} from 'antd';
import { useSelector } from 'react-redux';
import apiService from '../../../../service/apiService';
import { useState, useEffect } from 'react';
import notify from '../../../../ex/notify';
import Input from '../../../../components/Input/Input';
import { useMetaMask } from 'metamask-react';
import Button from '../../../../components/Button/Button';
import  * as _ from 'lodash';
import { MdContentCopy } from 'react-icons/md';

const service = new apiService();

const BuyPublicModal = ({
    open,
    onClose,
    width
}) => {
    const {token, userInfo} = useSelector(s => s);
    const [payData, setPayData] = useState(null)
    const [buyData, setBuyData] = useState(null)
    const [load, setLoad] = useState(false)
    const [CountCrypto, setCountCrypto] = useState('');
    const [wallet, setWallet] = useState('')
    const [startConnect, setStartConnect] = useState(false);
    const [convertVal, setConvertVal] = useState(0)

    const {connect, account, status} = useMetaMask();

    
    useEffect(() => {
        if(status === 'connected' && startConnect && account) {
            setWallet(account)
        } else {
            setWallet('')
        }
    }, [status, startConnect, account])


    const buyCrypto = () => {
        setLoad(true)
        if(Number(convertVal) < 10) {
            notify('Минимальная сумма покупки - 10$', 'ERROR')
            setLoad(false)
            return;
        } else {
            if(token) {
                const body = {
                    UserToken: token,
                    TransactionType: '0',
                    CountCrypto: Number(CountCrypto),
                    Wallet: wallet
                }
                service.createTransaction(body).then(res => {
                  
                    if(res) {
                        setBuyData(res)
                    } else {
                        setLoad(false)
                    }
                }).catch(err => {
                    notify('Произошла ошибка', 'ERROR')
                    setLoad(false)
                })
            }
        }
        
        
    }

    useEffect(() => {
        if(token && buyData) {
            service.createPay(buyData).then(res => {
           
                if(res && res?.result) {
                    setPayData(res)
                    notify('Статус транзакции - успешно', 'SUCCESS');
                } else {
                    notify('Выбранный тип транзакции не доступен, пожалуйста, выберите другой', 'ERROR')
                }
            }).finally(_ => setLoad(false))
        }
    }, [buyData, token])
    useEffect(() => {
        if(CountCrypto && userInfo?.PublicSaleTokenPrice) {
            setConvertVal(Number(CountCrypto) * Number(userInfo?.PublicSaleTokenPrice))
        } else {
            setConvertVal(0)
        }
    }, [CountCrypto, userInfo])

    const copyValue = (text, label) => {
        navigator.clipboard.writeText(text).then(res => {
            notify(label)  
        })
    }


    const closeHandle = () => {
        setCountCrypto(0)
        setWallet('')
        setStartConnect(false)
        setBuyData(null)
        setPayData(null)
        onClose()
    }


    return (
        <Modal
            width={width}
            open={open}
            onCancel={closeHandle}
            className="Modal BuyModal"
            >
            <div className="Modal__in BuyModal">
                <div className="BuyModal__head">
                    <h3 className="BuyModal__head_title Modal__title center">
                        покупка Public MPI
                    </h3>
                    {
                        !payData ? (
                            <div className="BuyModal__head_subtitle">
                                Если у вас нет Metamask тогда вам необходимо ввести вручную вашего кошелька. НЕЛЬЗЯ вводить биржевые кошельки. <br/>
                                <span>НА БИРЖЕВЫЕ КОШЕЛЬКИ ТОКЕН НЕ ПОСТУПИТ!</span>
                            </div>
                        ) : null
                    }
                </div>
                <div className="BuyModal__body">
                    <Row gutter={[20,20]}>
                        <Col span={24}>
                            {
                                payData ? (
                                    <div className='BuyModal__body_list'>
                                        <div className="BuyModal__body_list_item">
                                            <div className="BuyModal__body_list_item_name">Wallet: </div>
                                            <div className="BuyModal__body_list_item_value">
                                                <span className="BuyModal__body_list_item_value_t">
                                                {payData?.address?.slice(0, 5) + '...' + payData?.address?.slice(-5)}
                                                </span>
                                                <MdContentCopy 
                                                    onClick={() => copyValue(payData?.address, 'Адрес скопирован')}
                                                    className='BuyModal__body_list_item_value_c'/>
                                            </div>
                                        </div>
                                        <div className="BuyModal__body_list_item">
                                            <div className="BuyModal__body_list_item_name">Currency: </div>
                                            <div className="BuyModal__body_list_item_value">
                                                <span className="BuyModal__body_list_item_value_t">{payData?.currency}</span>
                                            </div>
                                        </div>
                                        <div className="BuyModal__body_list_item">
                                            <div className="BuyModal__body_list_item_name">Amount: </div>
                                            <div className="BuyModal__body_list_item_value">
                                                <span className="BuyModal__body_list_item_value_t">
                                                    {CountCrypto}
                                                </span>
                                                <MdContentCopy 
                                                    onClick={() => copyValue(CountCrypto, 'Количество скопировано')}
                                                    className='BuyModal__body_list_item_value_c'/>    
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="BuyModal__body_main">
                                        <Row gutter={[35,35]}>
                                            <Col span={12}>
                                                <div className="BuyModal__body_main_part">
                                                    <Input
                                                        label={<>
                                                            <div>
                                                                Хотите купить MPI
                                                            </div>
                                                            <div>
                                                                Курс MPI: <span style={{fontWeight: 700}}>{userInfo?.PublicSaleTokenPrice} USDT</span>
                                                            </div>
                                                        </>}
                                                        type={'number'}
                                                        placeholder={''}
                                                        value={CountCrypto}
                                                        onChange={e => setCountCrypto(e.target.value)}
                                                        />
                                                </div>
                                            </Col>
                                            <Col span={12}>
                                                <div className="BuyModal__body_main_part">
                                                    <Input
                                                        label={<>
                                                            <div>Нужно оплатить USDT</div>
                                                            <div>На наш кошелек</div>
                                                        </>}
                                                        placeholder={''}
                                                        type={'number'}
                                                        onChange={(e) => {
                                                            setCountCrypto(Number(e.target.value) / Number(userInfo?.PublicSaleTokenPrice))
                                                            // setConvertVal(Number(e.target.value))
                                                        }}
                                                        value={convertVal}
                                                        />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                )
                            }
                            
                        </Col>
                        {
                            !payData ? (
                                <Col span={24}>
                                    <div className="BuyModal__body_wallet">
                                        <div className="BuyModal__body_wallet_label">Сеть: BEP20</div>
                                        <Input
                                            label={'Введите адрес кошелька'}
                                            value={wallet}
                                            onChange={e => setWallet(e.target.value)}
                                            />
                                    </div>
                                </Col>
                            ) : null
                        }
                       
                        <Col span={24}>
                            <div className='BuyModal__body_action'>
                                <Row gutter={[15,15]}>
                                    {
                                        payData ? (
                                            null
                                        ) : (
                                            <Col span={24}>
                                                <div className="BuyModal__body_action_item">
                                                    <Button
                                                        load={status === 'initializing' || status === 'connecting'}
                                                        onClick={() => {
                                                            connect()
                                                            setStartConnect(true)
                                                        }}
                                                        disableTextTransform={true}
                                                        text={'Подтянуть из Metamask'}
                                                        disabled={status === 'unavailable'}
                                                        />
                                                </div>
                                                
                                            </Col>
                                        )
                                    }
                                    <Col span={24}>
                                        <div className="BuyModal__body_action_item">
                                            {
                                                payData ? (
                                                    <Button
                                                        onClick={closeHandle}
                                                        // variant='danger'
                                                        text={'Оплатил'}
                                                        disableTextTransform={true}
                                                        // load={load}
                                                        />
                                                ) : (
                                                    <Button
                                                        onClick={buyCrypto}
                                                        variant='default-fill'
                                                        text={'Отправить запрос'}
                                                        disableTextTransform={true}
                                                        load={load}
                                                        disabled={!wallet || !CountCrypto}
                                                        />
                                                )
                                            }
                                            
                                        </div>
                                        
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
                
                
            </div>
        </Modal>
    )
}


export default BuyPublicModal;