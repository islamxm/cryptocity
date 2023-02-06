import './HomeUl.scss';
import { Row, Col } from 'antd';
import Button from '../../../../components/Button/Button';
import { useEffect, useState } from 'react';
import * as _ from 'lodash';
import { useSelector } from 'react-redux';

const HomeUl = ({openAllUnlock, list}) => {
    const {userInfo} = useSelector(state => state);
    const [closestDate, setClosestDate] = useState('')
    const [unlockSum, setUnlockSum] = useState(0)


    useEffect(() => {
        if(list?.length > 0) {
            setClosestDate(list[list?.length - 1].DateUnlock)
            setUnlockSum(_.sum(list.map(item => Number(item.UnlockDoleSum))))
        } else {

        }   
    }, [list])


    return (
        <div className="HomeUl panel">
            <div className="HomeUl__head panel__head">Разлоки</div>
            <Col span={24}>
                <Row gutter={[20,20]}>
                    <Col span={24}>
                        <div className="HomeUl__val">
                            <div className="HomeUl__val_name">Всего в локе</div>
                            <div className="HomeUl__val_el">{userInfo?.AllUnlocksSum} MPI</div>
                        </div>
                    </Col>
                    <Col span={24}>
                        <div className="HomeUl__list">
                            <div className="HomeUl__item">
                                Ближайшая дата разлока <span>{userInfo?.MinDateUnlock}</span>
                            </div>
                            <div className="HomeUl__item">
                                Сумма  разлока <span>{userInfo?.CurUnlockSum} MPI</span>
                            </div>
                        </div>
                    </Col>
                    <Col span={24}>
                        <div className="HomeUl__action">
                            <Button
                                onClick={openAllUnlock}
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