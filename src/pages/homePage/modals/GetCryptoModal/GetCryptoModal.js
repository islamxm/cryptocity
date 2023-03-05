import './GetCryptoModal.scss';
import { Modal, Row, Col } from 'antd';
import Input from '../../../../components/Input/Input';
import Button from '../../../../components/Button/Button';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import apiService from '../../../../service/apiService';
import notify from '../../../../ex/notify';
import { ToastContainer } from 'react-toastify';


const service = new apiService();


const GetCryptoModal = ({
    visible,
    close,
}) => {
    const {token} = useSelector(state => state);
    const [load, setLoad] = useState(false);
    const [buyData, setBuyData] = useState(null);
    const [CountCrypto, setCountCrypto] = useState('')
    const [payData, setPayData] = useState(null)

    
    const closeHandle = () => {
        setBuyData(null)
        setPayData(null)
        setCountCrypto('')
        close()
    }


    const buyCrypto = () => {
        setLoad(true);
        if(token) {
            service.createTransaction({
                UserToken: token,
                TransactionType: 2,
                CountCrypto
            }).then(res => {
             
                if (res) setBuyData(res)
            })
        }
    }

    useEffect(() => {
        if(token && buyData) {
            service.createPay(buyData).then(res => {
                if(res && res?.result) {
                    setPayData(res)
                    notify('Статус транзакции - успешно', 'SUCCESS');
                } else {
                    notify('Произошла ошибка', 'ERROR')
                }
            }).finally(_ => setLoad(false))
        }
    }, [buyData, token])


    return (
        <Modal
            open={visible}
            onCancel={closeHandle}
            className="Modal GetCryptoModal"
            >
         
            <div className="Modal__in GetCryptoModal__in">
                <Col span={24}>
                    <Row gutter={[35,35]}>
                        <Col span={24}>
                            <div className="GetCryptoModal__head">
                                <h2 className="Modal__title center GetCryptoModal__head_title">покупка крипты</h2>
                            </div>
                        </Col>
                        <Col span={24}>
                            <div className="GetCryptoModal__main">
                                {
                                    payData ? (
                                        <Row gutter={[15,15]}>
                                            <Col span={24}>
                                                <div className="GetCryptoModal__main_info">
                                                    <div className="GetCryptoModal__main_info_label">Wallet:</div>
                                                    <div className="GetCryptoModal__main_info_value">{payData?.address}</div>
                                                </div>
                                            </Col>
                                            <Col span={24}>
                                                <div className="GetCryptoModal__main_info">
                                                    <div className="GetCryptoModal__main_info_label">Currency:</div>
                                                    <div className="GetCryptoModal__main_info_value">{payData?.currency}</div>
                                                </div>
                                            </Col>
                                            <Col span={24}>
                                                <div className="GetCryptoModal__main_info">
                                                    <div className="GetCryptoModal__main_info_label">Amount:</div>
                                                    <div className="GetCryptoModal__main_info_value">{payData?.amount} </div>
                                                       
                                                </div>
                                            </Col>
                                        </Row>
                                    ) : (
                                        <Input
                                            type='number'
                                            value={CountCrypto}
                                            onChange={e => setCountCrypto(e.target.value)}
                                            placeholder={0}
                                            label={'Сумма ввода'}
                                            />
                                    )
                                }
                            </div>
                        </Col>
                        <Col span={24}>
                            <div className="GetCryptoModal__action">
                                {
                                    payData ? (
                                        <Button
                                            onClick={closeHandle}
                                            variant='danger'
                                            text={'Закрыть'}
                                            disableTextTransform
                                            />
                                    ) : (
                                        <Button
                                            load={load}
                                            onClick={buyCrypto}
                                            disabled={!CountCrypto}
                                            variant='default-fill'
                                            text={'Купить'}
                                            disableTextTransform
                                            />
                                    )
                                }
                            </div>
                        </Col>   
                    </Row>
                </Col>
               
                
            </div>
        </Modal>
    )
}

export default GetCryptoModal;