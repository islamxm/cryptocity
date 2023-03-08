import './HomePr.scss';
import { Row,Col } from 'antd';
import Button from '../../../../components/Button/Button';
import { useSelector } from 'react-redux';
import GetCryptoModal from '../../modals/GetCryptoModal/GetCryptoModal';
import { useState } from 'react';
import InfoModal from '../../modals/InfoModal/InfoModal';
import BuyPrivateModal from '../../modals/BuyModal/BuyPrivateModal';

const HomePr = () => {
    const {userInfo} = useSelector(state => state);
    const [buyModal, setBuyModal] = useState(false)
    const [infoModal, setInfoModal] = useState(false)

    const openBuyModal = () => {
        if(userInfo?.TransactionsType == '-1' || userInfo?.TransactionsType == '1') {
            setBuyModal(true)
        } else {
            setInfoModal(true) 
           
        }
    }
    const closeBuyModal = () => setBuyModal(false)

    return (
        <div className="HomePr panel">
            <InfoModal
                type={userInfo?.TransactionsType}
                visible={infoModal}
                close={() => setInfoModal(false)}
                />
            <BuyPrivateModal
                onClose={closeBuyModal}
                width={600}
                open={buyModal}
                />
            
            <div className="HomePr__head panel__head">PRIVATE SALE</div>
            <Col span={24}>
                <Row gutter={[15,15]}>
                    <Col md={14} span={24}>
                        <div className="HomePr__main">
                            {/* <div className="HomePr__main_item light">
                            Курс обмена <span>{userInfo?.PrivateSaleTokenPrice}</span>
                            </div> */}
                            <div className="HomePr__main_item light">
                            Цена токена <span>{userInfo?.PrivateSaleTokenPrice} USDT</span>
                            </div>
                            <div className="HomePr__main_item">
                            Вестинг -20% TGE, далее линейный вестинг в течение 6 месяцев <span>1,000/2,500 MPI</span>
                            </div>
                            <div className="HomePr__main_item">
                            Минимальная сумма покупки <span>1,000/2,500 MPI</span>
                            </div>
                        </div>
                    </Col>
                    <Col span={24} md={10}>
                        <div className="HomePr__action">
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

export default HomePr;