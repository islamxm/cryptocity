import './HomeCon.scss';
import { Row, Col } from 'antd';
import Button from '../../../../components/Button/Button';
import { useSelector } from 'react-redux';
import PrBar from './components/PrBar/PrBar';
import { useEffect, useState } from 'react';
import * as _ from 'lodash';

const HomeCon = ({openGetCryptoModal}) => {
    const {userInfo} = useSelector(state => state);
    const [value, setValue] = useState(0)

    useEffect(() => {
        if(userInfo) {
            setValue(Number(userInfo?.MPIforOutput) / Number(userInfo?.OutputMinSum) * 100)
        }
    }, [userInfo])

    return (
        <div className="HomeCon panel">
            <div className="HomeCon__head panel__head">Вывод MPI</div>
            <Col span={24}>
                <Row gutter={[20,20]}>
                    <Col md={14} span={24}>
                        <div className="HomeCon__list">
                            <div className="HomeCon__item light">
                            Цена токена <span>{userInfo?.HardcoinTokenPrice} USDT</span>
                            </div>
                            <div className="HomeCon__item aqua">
                            Минимальная сумма для вывода <span>{_.round(userInfo?.OutputMinSum, 2)} MPI</span>
                            </div>
                            <div className="HomeCon__item">
                            MPI на счету для вывода <span>{_.round(userInfo?.MPIforOutput, 2)} MPI</span>
                            </div>
                        </div>
                    </Col>
                    <Col md={10} span={24}>
                        <div className="HomeCon__pr">
                            <div className="HomeCon__pr_ind">
                                <div className="HomeCon__pr_ind_val">{value > 100 ? 100 : value}%</div>
                                <div className="HomeCon__pr_ind_ln">
                                    <PrBar value={value > 100 ? 100 : value}/>
                                </div>
                            </div>
                            <div className="HomeCon__pr_action">
                                <Button
                                    disabled={value < 100}
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