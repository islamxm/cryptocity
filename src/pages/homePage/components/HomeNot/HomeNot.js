import './HomeNot.scss';
import { Row, Col } from 'antd';
import Button from '../../../../components/Button/Button';


const HomeNot = () => {
    return (
        <div className="HomeNot panel">
            <Col span={24}>
                <Row gutter={[25, 50]}>
                    <Col span={24}>
                        <div className="HomeNot__main">
                            <div className="HomeNot__main_item">
                                <div className="HomeNot__main_item_val">72</div>
                                <div className="HomeNot__main_item_name">Days</div>
                            </div>
                            :
                            <div className="HomeNot__main_item">
                                <div className="HomeNot__main_item_val">09</div>
                                <div className="HomeNot__main_item_name">Hourse</div>
                            </div>
                            :
                            <div className="HomeNot__main_item">
                                <div className="HomeNot__main_item_val">29</div>
                                <div className="HomeNot__main_item_name">Minuts</div>
                            </div>
                            :
                            <div className="HomeNot__main_item">
                                <div className="HomeNot__main_item_val">02</div>
                                <div className="HomeNot__main_item_name">Seconds</div>
                            </div>
                        </div>
                    </Col>
                    <Col span={24}>
                        <div className="HomeNot__action">
                            <Button
                                text={'ПОДПИСАТЬСЯ НА УВЕДОМЛЕНИЕ'}
                                />
                        </div>
                    </Col>
                </Row>
            </Col>
        </div>
    )
}

export default HomeNot;