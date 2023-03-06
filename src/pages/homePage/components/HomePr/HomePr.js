import './HomePr.scss';
import { Row,Col } from 'antd';
import Button from '../../../../components/Button/Button';
import { useSelector } from 'react-redux';
import GetCryptoModal from '../../modals/GetCryptoModal/GetCryptoModal';
import { useState } from 'react';
import InfoModal from '../../modals/InfoModal/InfoModal';

const HomePr = () => {
    const {userInfo} = useSelector(state => state);
    const [buyModal, setBuyModal] = useState(false)
    const [infoModal, setInfoModal] = useState(false)

    const openBuyModal = () => {
        if(userInfo?.TransactionsType !== '1') {
            setInfoModal(true) 
        } else {
            setBuyModal(true)
        }
    }
    const closeBuyModal = () => setBuyModal(false)

    return (
        <div className="HomePr panel">
            <InfoModal
                visible={infoModal}
                close={() => setInfoModal(false)}
                />
            <GetCryptoModal
                visible={buyModal}
                close={closeBuyModal}
                type='1'
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
                            Цена токена <span>{userInfo?.PublicSaleTokenPrice} USDT</span>
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