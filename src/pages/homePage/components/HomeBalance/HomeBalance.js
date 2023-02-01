import './HomeBalance.scss';
import { Row, Col } from 'antd';

const HomeBalance = () => {
    return (
        <div className="HomeBalance panel">
            <div className="HomeBalance__head panel__head">balance</div>
            <Col span={24}>
                <Row gutter={[30,30]}>
                    <Col span={24}>
                        <Row gutter={[30,30]}>
                            <Col span={9}>
                                <div className="HomeBalance__dg"></div>
                            </Col>
                            <Col span={15}>
                                <div className="HomeBalance__val">
                                2,411 MPI
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={24}>
                        <div className="HomeBalance__list">
                            <div className="HomeBalance__item">
                                <div className="HomeBalance__item_name">MPI локи</div>
                                <div className="HomeBalance__item_value">9</div>
                            </div>
                            <div className="HomeBalance__item">
                                <div className="HomeBalance__item_name">MPI депозит</div>
                                <div className="HomeBalance__item_value">18</div>
                            </div>
                            <div className="HomeBalance__item">
                                <div className="HomeBalance__item_name">MPI на балансе</div>
                                <div className="HomeBalance__item_value">0</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </div>
    )
}

export default HomeBalance;