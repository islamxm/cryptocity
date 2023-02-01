import './HomeCon.scss';
import { Row, Col } from 'antd';
import Button from '../../../../components/Button/Button';

const HomeCon = () => {
    return (
        <div className="HomeCon panel">
            <div className="HomeCon__head panel__head">Вывод MPI</div>
            <Col span={24}>
                <Row gutter={[20,20]}>
                    <Col span={16}>
                        <div className="HomeCon__list">
                            <div className="HomeCon__item">
                            Минимальная сумма для вывода <span>2,411 MPI</span>
                            </div>
                            <div className="HomeCon__item">
                            MPI на счету для вывода <span>1,000/2,500 MPI</span>
                            </div>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="HomeCon__pr">
                            <div className="HomeCon__pr_ind">
                                <div className="HomeCon__pr_ind_val">73%</div>
                                <div className="HomeCon__pr_ind_ln">
                                    
                                </div>
                            </div>
                            <div className="HomeCon__pr_action">
                                <Button
                                    text={'ВЫВОД КРИПТЫ'}
                                    />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </div>
    )
}

export default HomeCon;