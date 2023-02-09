import './RefMain.scss';
import { Row,Col } from 'antd';
import Button from '../../../../components/Button/Button';
import { useEffect } from 'react';

const RefMain = ({data, collect, load}) => {


  



    return (
        <div className="RefMain panel">
            <div className="RefMain__head panel__head">всего заработано</div>
            <Col span={24}>
                <Row gutter={[25,25]}>
                    <Col span={24}>
                        <div className="RefMain__value">${data?.collectMPItoDollars ? data?.collectMPItoDollars : 0}</div>
                    </Col>
                    <Col span={24}>
                        <div className="RefMain__action">
                            <Button
                                onClick={collect}
                                text={'СОБРАТЬ'}
                                load={load}
                                />
                        </div>
                    </Col>
                </Row>
            </Col>
        </div>
    )
}

export default RefMain;