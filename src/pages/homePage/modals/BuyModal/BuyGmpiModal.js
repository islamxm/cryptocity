import './BuyModal.scss';
import {Modal, Row, Col} from 'antd';
import { useSelector } from 'react-redux';
import apiService from '../../../../service/apiService';
import { useState, useEffect } from 'react';
import notify from '../../../../ex/notify';
import Input from '../../../../components/Input/Input';
import { useMetaMask } from 'metamask-react';
import Button from '../../../../components/Button/Button';

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
    const [CountCrypto, setCountCrypto] = useState('');


    const buyCrypto = () => {
        setLoad(true)
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
        setCountCrypto('')
        setPayData(null);
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
                                            <span className="BuyModal__body_list_item_name">Wallet: </span>
                                            <span className="BuyModal__body_list_item_value">{payData?.address}</span>
                                        </div>
                                        <div className="BuyModal__body_list_item">
                                            <span className="BuyModal__body_list_item_name">Currency: </span>
                                            <span className="BuyModal__body_list_item_value">{payData?.currency}</span>
                                        </div>
                                        <div className="BuyModal__body_list_item">
                                            <span className="BuyModal__body_list_item_name">Amount: </span>
                                            <span className="BuyModal__body_list_item_value">{CountCrypto}</span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="BuyModal__body_main">
                                        <Row gutter={[35,35]}>
                                            <Col span={12}>
                                                <div className="BuyModal__body_main_part">
                                                    <div className="BuyModal__body_main_part_label">
                                                        <span>Хотите купить G/MPI</span>
                                                        <span>Курс G/MPI: {userInfo?.HardcoinTokenPrice} USDT</span>
                                                    </div>
                                                    <Input
                                                        placeholder={''}
                                                        value={CountCrypto}
                                                        onChange={e => setCountCrypto(e.target.value)}
                                                        />
                                                </div>
                                            </Col>
                                            <Col span={12}>
                                                <div className="BuyModal__body_main_part">
                                                    <div className="BuyModal__body_main_part_label">
                                                        <span>Нужно оплатить USDT</span>
                                                        <span>На наш кошелек</span>
                                                    </div>
                                                    <Input
                                                        placeholder={''}
                                                        value={`${Number(CountCrypto) * Number(userInfo?.HardcoinTokenPrice)} USDT`}
                                                        disabled
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