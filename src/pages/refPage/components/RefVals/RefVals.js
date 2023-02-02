import './RefVals.scss';
import { Row, Col } from 'antd';

const RefVals = () => {
    return (
        <div className="RefVals panel">
            <Col span={24}>
                <Row gutter={[10,10]}>
                    <Col span={24}>
                        <div className="RefVals__main">
                            <span className="RefVals__main_name">Процент от награды:</span>
                            <span className="RefVals__main_value">1,5%</span>
                        </div>
                    </Col>
                    <Col span={24}>
                        <Row gutter={[2,2]}>
                            <Col span={24}>
                                <div className="RefVals__item">
                                    <span className="RefVals__item_name">Достижение 10 уровня:</span>
                                    <span className="RefVals__item_value">ХХХ MPI</span>
                                </div>
                            </Col>
                            <Col span={24}>
                                <div className="RefVals__item">
                                    <span className="RefVals__item_name">Достижение 25 уровня:</span>
                                    <span className="RefVals__item_value">ХХХ MPI</span>
                                </div>
                            </Col>
                            <Col span={24}>
                                <div className="RefVals__item">
                                    <span className="RefVals__item_name">Достижение 50 уровня:</span>
                                    <span className="RefVals__item_value">ХХХ MPI</span>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </div>
    )
}

export default RefVals;