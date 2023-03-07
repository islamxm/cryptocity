import './HomeBuy.scss';
import { Row, Col } from 'antd';
import Button from '../../../../components/Button/Button';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import GetCryptoModal from '../../modals/GetCryptoModal/GetCryptoModal';

const HomeBuy = () => {
    const [buyModal, setBuyModal] = useState(false)
    const {userInfo} = useSelector(state => state);

    const openBuyModal = () => setBuyModal(true)
    const closeBuyModal = () => setBuyModal(false)


    return (
        <div className="HomeBuy panel">
            <GetCryptoModal
                visible={buyModal}
                close={closeBuyModal}
                type={'2'}
                />
            <div className="HomeBuy__head panel__head">Купить MPI в игру</div>
            <Col span={24}>
                <Row gutter={[40,40]}>
                    <Col span={24}>
                        <div className="HomeBuy__value">
                        Token price <span>${userInfo?.HardcoinTokenPrice}</span>
                        </div>
                    </Col>
                    <Col span={24}>
                        <div className="HomeBuy__action">
                            <Button
                                disabled={userInfo?.isAppAccount == 0}
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

export default HomeBuy;