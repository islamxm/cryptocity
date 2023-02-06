import './HomeSale.scss';
import { Row,Col } from 'antd';
import Button from '../../../../components/Button/Button';
import { useSelector } from 'react-redux';


const HomeSale = () => {
    const {userInfo} = useSelector(state => state);


    return (
        <div className="HomeSale panel">
            <div className="HomeSale__head panel__head">PUBLIC SALE</div>
            <Col span={24}>
                <Row gutter={[15,15]}>
                    <Col span={14}>
                        <div className="HomeSale__main">
                            <div className="HomeSale__main_item">
                            Цена токена <span>{userInfo?.PublicSaleTokenPrice} USDT</span>
                            </div>
                            <div className="HomeSale__main_item">
                            Вестинг -20% TGE, далее линейный вестинг в течение 6 месяцев <span>1,000/2,500 MPI</span>
                            </div>
                            <div className="HomeSale__main_item">
                            Минимальная сумма покупки <span>1,000/2,500 MPI</span>
                            </div>
                        </div>
                    </Col>
                    <Col span={10}>
                        <div className="HomeSale__action">
                            <Button
                                text={'BUY NOW'}
                                />
                        </div>
                    </Col>
                </Row>
            </Col>
        </div>
    )
}

export default HomeSale;