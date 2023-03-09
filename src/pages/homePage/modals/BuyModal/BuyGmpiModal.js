import './BuyModal.scss';
import {Modal, Row, Col} from 'antd';
import { useSelector } from 'react-redux';
import apiService from '../../../../service/apiService';
import { useState, useEffect, useCallback } from 'react';
import notify from '../../../../ex/notify';
import Input from '../../../../components/Input/Input';
import { useMetaMask } from 'metamask-react';
import Button from '../../../../components/Button/Button';
import {MdContentCopy} from 'react-icons/md';

const service = new apiService();

const BuyGmpiModal = ({
    open,
    onClose,
    width
}) => {
    const {token, userInfo} = useSelector(s => s);
    const [payData, setPayData] = useState(null)
    const [buyData, setBuyData] = useState(null)
    const [load, setLoad] = useState(false)
    const [CountCrypto, setCountCrypto] = useState(0);
    const [convertVal, setConvertVal] = useState(0);


    const buyCrypto = useCallback(() => {
        setLoad(true)
        if(convertVal < 10) {
            
             notify('Минимальная сумма покупки - 10$', 'ERROR')
             setLoad(false)
             return;
        } else {
            if(token) {
                const body = {
                    UserToken: token,
                    TransactionType: '2',
                    CountCrypto: Number(CountCrypto),
                }
                service.createTransaction(body).then(res => {
                    console.log(res)
                    if(res) {
                        setBuyData(res)
                    } else {
                        setLoad(false)
                    }
                }).catch(err => {
                    console.log(err)
                    notify('Произошла ошибка', 'ERROR')
                    setLoad(false)
                })
            }
        }
        
        
    }, [convertVal])

    useEffect(() => {
        if(token && buyData) {
            service.createPay(buyData).then(res => {
                console.log(res)
                if(res && res?.result) {
                    setPayData(res)
                    notify('Статус транзакции - успешно', 'SUCCESS');
                } else {
                    notify('Выбранный тип транзакции не доступен, пожалуйста, выберите другой', 'ERROR')
                }
            }).finally(_ => setLoad(false))
        }
    }, [buyData, token])

    const closeHandle = () => {
        setCountCrypto(0)
        setPayData(null);
        onClose()
    }

    const copyValue = (text, label) => {
        navigator.clipboard.writeText(text).then(res => {
            notify(label)  
        })
    }

    useEffect(() => {
        if(CountCrypto && userInfo?.HardcoinTokenPrice) {
            setConvertVal(Number(CountCrypto) * Number(userInfo?.HardcoinTokenPrice))
        } else {
            setConvertVal(0)
        }
    }, [CountCrypto, userInfo])


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
                        покупка G/Mpi
                    </h3>
                    {
                        !payData ? (
                            <div className="BuyModal__head_subtitle center">
                                После оплаты, G/MPI появится на вашем счете в игре
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
                                                            отите купить G/MPI
                                                            </div>
                                                            <div>
                                                            Курс G/MPI: 
                                                            <span style={{fontWeight: 700}}>{userInfo?.HardcoinTokenPrice} USDT</span> 
                                                            </div>
                                                        </>}
                                                        type='number'
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
                                                            <div>
                                                            Нужно оплатить USDT
                                                            </div>
                                                            <div>
                                                            На наш кошелек 
                                                            </div>
                                                        </>}
                                                        placeholder={''}
                                                        type={'number'}
                                                        onChange={(e) => {
                                                            setCountCrypto(Number(e.target.value) / Number(userInfo?.HardcoinTokenPrice))
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
                        <Col span={24}>
                            <div className='BuyModal__body_action'>
                                <Row gutter={[15,15]}>
                                    <Col span={24}>
                                        <div className="BuyModal__body_action_item">
                                            {
                                                !payData ? (
                                                    <Button
                                                        onClick={buyCrypto}
                                                        variant='default-fill'
                                                        text={'Отправить запрос'}
                                                        disableTextTransform={true}
                                                        load={load}
                                                        disabled={!CountCrypto}
                                                        />
                                                ) : (
                                                    <Button
                                                        onClick={closeHandle}
                                                        // variant='danger'
                                                        text={'Оплатил'}
                                                        disableTextTransform={true}
                                                        // load={load}
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


export default BuyGmpiModal;