import './AllUnlockModal.scss';
import { Modal } from 'antd';
import { useEffect } from 'react';

const AllUnlockModal = ({
    visible,
    close,
    data
}) => {
    


    const closeHandle = () => {
        close()
    }


    return (
        <Modal width={660} className='AllUnlockModal Modal' open={visible} onCancel={closeHandle}>
            <div className="Modal__in AllUnlockModal__in">
                <div className="AllUnlockModal__head">
                    <h2 className="AllUnlockModal__head_title Modal__title center">Разлоки</h2>
                    <div className="AllUnlockModal__head_ex">
                    После разлока, токены автоматически добавляются на Ваш кошелек
                    </div>
                </div>
                <div className="AllUnlockModal__body">
                    <div className="AllUnlockModal__body_top">
                        <div className="AllUnlockModal__body_top_item">Дата </div>
                        <div className="AllUnlockModal__body_top_item">Сумма</div>
                    </div>
                    {
                        data?.map((item, index) => (
                            <div className="AllUnlockModal__body_item">
                                <div className="AllUnlockModal__body_item_value">{item?.DateUnlock}</div>
                                <div className="AllUnlockModal__body_item_value">{item?.UnlockDoleSum} MPI</div>
                            </div>
                        ))
                    }
                    
                    
                </div>
            </div>
        </Modal>
    )
}

export default AllUnlockModal;