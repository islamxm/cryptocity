import './GetCryptoModal.scss';
import { Modal, Row, Col } from 'antd';
import Input from '../../../../components/Input/Input';
import Button from '../../../../components/Button/Button';

const GetCryptoModal = ({
    visible,
    close
}) => {


    const closeHandle = () => {
        close()
    }


    return (
        <Modal
            open={visible}
            onCancel={closeHandle}
            className="Modal GetCryptoModal"
            >
            <div className="Modal__in GetCryptoModal__in">
                <Col span={24}>
                    <Row gutter={[35,35]}>
                        <Col span={24}>
                            <div className="GetCryptoModal__head">
                                <h2 className="Modal__title center GetCryptoModal__head_title">покупка крипты</h2>
                            </div>
                        </Col>
                        <Col span={24}>
                            <div className="GetCryptoModal__main">
                                <Input
                                    placeholder={0}
                                    label={'Сумма ввода'}
                                    />
                            </div>
                        </Col>
                        <Col span={24}>
                            <div className="GetCryptoModal__action">
                                <Button
                                    variant='default-fill'
                                    text={'Отправить запрос'}
                                    disableTextTransform
                                    />
                            </div>
                        </Col>
                    </Row>
                </Col>
               
                
            </div>
        </Modal>
    )
}

export default GetCryptoModal;