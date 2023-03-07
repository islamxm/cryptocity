import { Modal, Col, Row } from "antd";
import { useCallback } from "react";



const InfoModal = ({
    visible,
    close,
    type
}) => {

    const switchType = useCallback((type) => {
        switch(type) {
            case '0':
                return 'Public'
            case '1':
                return 'Private'
            default:
                return ''
        }
    }, [type])

    return (
        <Modal width={500} className="Modal" open={visible} onCancel={close}> 
            <div className="Modal__in" style={{color: '#fff'}}>
            Вы уже совершили запрос для покупки MPI {switchType(type)}. Потому данный тип покупки вам недоступен, если вы желаете купить другой MPI обратитесь к админам
            </div>
        </Modal>
    )
}

export default InfoModal;