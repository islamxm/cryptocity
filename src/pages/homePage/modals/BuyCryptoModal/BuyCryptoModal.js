import './BuyCryptoModal.scss';
import { Modal, Row, Col } from 'antd';
import Button from '../../../../components/Button/Button';
import Input from '../../../../components/Input/Input';

const BuyCryptoModal = ({
    visible,
    close
}) => {


    const closeHandle = () => {
        close()
    }

    return (
        <Modal
            width={600}
            open={visible}
            onCancel={closeHandle}
            className={"Modal BuyCryptoModal"}
            > 
            <div className="Modal__in BuyCryptoModal__in">
                <div className="BuyCryptoModal__head">
                    <h2 className="Modal__title center BuyCryptoModal__head_title">вывод крипты</h2>
                    <div className="BuyCryptoModal__head_ex">
                    Вы не можете вывести крипту на биржу. Можно вывести только на свой кошелек.
                    </div>
                </div>
                <div className="BuyCryptoModal__body">
                    <Col span={24}>
                        <Row gutter={[35, 35]}>
                            <Col span={24}>
                                <div className="BuyCryptoModal__body_main">
                                    <div className="BuyCryptoModal__body_main_inp">
                                        <Input
                                            label={'Сумма вывода'}
                                            placeholder={'0'}
                                            />
                                    </div>
                                    <div className="BuyCryptoModal__body_main_ex">
                                    Доступно: <span>1,598 MPI</span>
                                    </div>
                                </div>
                            </Col>
                            <Col span={24}>
                                <Row gutter={[2,2]}>
                                    <Col span={24}>
                                        <div className="BuyCryptoModal__body_net">Сеть bit20</div>
                                    </Col>
                                    <Col span={24}>
                                        <Input
                                            placeholder={'0'}
                                            label={'Введите номер кошелька'}
                                            />
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={24}>
                                <div className="BuyCryptoModal__action">
                                    <div className="BuyCryptoModal__action_item">
                                        <Button
                                            text={'Подтянуть из metamask'}
                                            disableTextTransform={true}
                                            />
                                    </div>
                                    <div className="BuyCryptoModal__action_item">
                                        <Button
                                            variant='default-fill'
                                            text={'Отправить запрос'}
                                            disableTextTransform={true}
                                            />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </div>
                    
            </div>   

        </Modal>
    )
}

export default BuyCryptoModal;