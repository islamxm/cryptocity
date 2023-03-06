import './HomeSale.scss';
import { Row,Col } from 'antd';
import Button from '../../../../components/Button/Button';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import GetCryptoModal from '../../modals/GetCryptoModal/GetCryptoModal';
import InfoModal from '../../modals/InfoModal/InfoModal';
const HomeSale = () => {
    const {userInfo} = useSelector(state => state);
    const [buyModal, setBuyModal] = useState(false);
    const [infoModal, setInfoModal] = useState(false)

    const openBuyModal = () => {
        if(userInfo?.TransactionType !== '0') {
            setInfoModal(true)
        } else {
            setBuyModal(true)
        }
    }
    const closeBuyModal = () => setBuyModal(false)

    

    return (
        <div className="HomeSale panel">
            <InfoModal
                type={userInfo?.TransactionType}
                visible={infoModal}
                close={() => setInfoModal(false)}
                />
            <GetCryptoModal
                visible={buyModal}
                close={closeBuyModal}
                type={'0'}
                />
            <div className="HomeSale__head panel__head">PUBLIC SALE</div>
            <Col span={24}>
                <Row gutter={[15,15]}>
                    <Col md={14} span={24}>
                        <div className="HomeSale__main">
                            {/* <div className="HomeSale__main_item light">
                                Курс обмена <span>{userInfo?.PublicSaleTokenPrice}</span>
                            </div> */}
                            <div className="HomeSale__main_item light">
                            Цена токена <span>{userInfo?.PublicSaleTokenPrice} USDT</span>
                            </div>
                            <div className="HomeSale__main_item">
                            Вестинг -20% TGE, далее линейный вестинг в течение 6 месяцев <span>1,000/2,500 MPI</span>
                            </div>
                            <div className="HomeSale__main_item">
                            Минимальная сумма покупки <span>1,000/2,500 MPI</span>
                            </div>
                        </div>
                    </Col>
                    <Col span={24} md={10}>
                        <div className="HomeSale__action">
                            <Button
                                onClick={openBuyModal}
                                text={'BUY NOW'}
                                />
                        </div>
                    </Col>
                </Row>
            </Col>
        </div>
    )
}

export default HomeSale;