import './HomeCon.scss';
import { Row, Col } from 'antd';
import Button from '../../../../components/Button/Button';
import { useSelector } from 'react-redux';
const HomeCon = ({openGetCryptoModal}) => {
    const {userInfo} = useSelector(state => state);

    return (
        <div className="HomeCon panel">
            <div className="HomeCon__head panel__head">Вывод MPI</div>
            <Col span={24}>
                <Row gutter={[20,20]}>
                    <Col md={16} span={24}>
                        <div className="HomeCon__list">
                            <div className="HomeCon__item">
                            Минимальная сумма для вывода <span>{userInfo?.OutputMinSum} MPI</span>
                            </div>
                            <div className="HomeCon__item">
                            MPI на счету для вывода <span>{userInfo?.MPIforOutput} MPI</span>
                            </div>
                        </div>
                    </Col>
                    <Col md={8} span={24}>
                        <div className="HomeCon__pr">
                            <div className="HomeCon__pr_ind">
                                <div className="HomeCon__pr_ind_val">73%</div>
                                <div className="HomeCon__pr_ind_ln">
                                    
                                </div>
                            </div>
                            <div className="HomeCon__pr_action">
                                <Button
                                    onClick={openGetCryptoModal}
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