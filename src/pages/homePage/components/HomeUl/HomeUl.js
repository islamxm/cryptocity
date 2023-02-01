import './HomeUl.scss';
import { Row, Col } from 'antd';
import Button from '../../../../components/Button/Button';


const HomeUl = () => {
    return (
        <div className="HomeUl panel">
            <div className="HomeUl__head panel__head">Разлоки</div>
            <Col span={24}>
                <Row gutter={[20,20]}>
                    <Col span={24}>
                        <div className="HomeUl__val">
                            <div className="HomeUl__val_name">Всего в локе</div>
                            <div className="HomeUl__val_el">1000 MPI</div>
                        </div>
                    </Col>
                    <Col span={24}>
                        <div className="HomeUl__list">
                            <div className="HomeUl__item">
                                Ближайшая дата разлока <span>22.01.2023</span>
                            </div>
                            <div className="HomeUl__item">
                                Сумма  разлока <span>10,000 MPI</span>
                            </div>
                        </div>
                    </Col>
                    <Col span={24}>
                        <div className="HomeUl__action">
                            <Button
                                text={'ВСЕ РАЗЛОКИ'}
                                />
                        </div>
                    </Col>
                </Row>
            </Col>
        </div>
    )
}

export default HomeUl;