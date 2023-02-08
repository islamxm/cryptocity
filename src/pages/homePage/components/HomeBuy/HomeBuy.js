import './HomeBuy.scss';
import { Row, Col } from 'antd';
import Button from '../../../../components/Button/Button';
import { useSelector } from 'react-redux';


const HomeBuy = ({openBuyCryptoModal}) => {

    const {userInfo} = useSelector(state => state);





    return (
        <div className="HomeBuy panel">
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
                                // disabled={true}
                                onClick={openBuyCryptoModal}
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