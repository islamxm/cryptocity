import './RefMain.scss';
import { Row,Col } from 'antd';
import Button from '../../../../components/Button/Button';

const RefMain = () => {
    return (
        <div className="RefMain panel">
            <div className="RefMain__head panel__head">всего заработано</div>
            <Col span={24}>
                <Row gutter={[25,25]}>
                    <Col span={24}>
                        <div className="RefMain__value">$2,411</div>
                    </Col>
                    <Col span={24}>
                        <div className="RefMain__action">
                            <Button
                                text={'СОБРАТЬ'}
                                />
                        </div>
                    </Col>
                </Row>
            </Col>
        </div>
    )
}

export default RefMain;