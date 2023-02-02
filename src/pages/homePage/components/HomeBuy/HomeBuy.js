import './HomeBuy.scss';
import { Row, Col } from 'antd';
import Button from '../../../../components/Button/Button';

const HomeBuy = () => {
    return (
        <div className="HomeBuy panel">
            <div className="HomeBuy__head panel__head">Купить MPI в игру</div>
            <Col span={24}>
                <Row gutter={[40,40]}>
                    <Col span={24}>
                        <div className="HomeBuy__value">
                        Token price <span>$2,411</span>
                        </div>
                    </Col>
                    <Col span={24}>
                        <div className="HomeBuy__action">
                            <Button
                                // disabled={true}
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