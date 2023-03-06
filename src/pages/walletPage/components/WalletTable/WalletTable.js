import { useEffect } from 'react';
import './WalletTable.scss';
import notify from '../../../../ex/notify';
import {MdOutlineContentCopy} from 'react-icons/md';
import Hint from '../../../../components/Hint/Hint';
import { Popover } from 'antd';
import {AiOutlineInfoCircle} from 'react-icons/ai'
import * as _ from 'lodash';



const tableHead = [
    {label: 'Тип перевода', id: '0'},
    {label: 'Сумма', id: '1'},
    {label: 'Ожидаете', id: '2'},
    {label: 'Кошелек', id: '3'},
    {label: 'Оплата', id: '4'},
    {label: 'Отправлено', id: '5'},
    {label: 'Статус', id: '6'},
]


const WalletTable = ({list = []}) => {


    const copyValue = (text) => {
        navigator.clipboard.writeText(text).then(res => {
            notify(
                <>
                    <div style={{color: 'green'}}>Адрес скопирован</div>
                    <div>{text}</div>
                </>
            )  
        })
    }

    const switchTypes = (type) => {
        switch(type) {
            case '0':
                return 'Public'
            case '1':
                return 'Private'
            case '2':
                return 'GameMPI'
            case '3':
                return 'Output'
            default:
                return 'N/D'
        }
    }

    const switchStatus = (status, descr) => {
        switch(status) {
            case '-1':
                return 'Ожидает вашей оплаты'
            case '0':
                return (
                    <span style={{color: 'rgba(255, 255, 255, 0.5)'}}>На проверке</span>
                )
            case '1':
                return (
                    <span style={{color: 'var(--aqua)'}}>Выполнен</span>
                )
            case '2':
                return (
                    <span style={{color: 'var(--red)', display: 'flex', alignItems: 'center'}}>
                        Отклонен
                        <Popover
                            placement={'bottom'}
                            content={
                                <Hint>
                                    {descr}
                                </Hint>
                            }
                            >
                            <AiOutlineInfoCircle style={{marginLeft: 5}} color={'var(--aqua)'}/>
                        </Popover>
                    </span>
                )
            default:
                return 'N/D'
        }
    }


    return ( 
        <div className="WalletTable panel">
            <table className="WalletTable__table">
                
                <tr>
                    {
                        tableHead?.map((item) => (
                            <th key={item?.id}>{item?.label}</th>
                        ))
                    }
                </tr>
                {
                    list?.map((item, index) => (
                        <tr className="WalletTable__table_row">
                            <td className='WalletTable__table_item WalletTable__table_type'>
                                {switchTypes(item?.TransactionType)}
                            </td>
                            <td className='WalletTable__table_item WalletTable__table_sum'>
                                <div className="WalletTable__table_sum_main">{item?.Amount}</div>
                                {/* <div className="WalletTable__table_sum_tm">9.09.2022 12:59</div> */}
                            </td>
                            <td className='WalletTable__table_item'>
                                {item?.Wait}
                            </td>
                            <td className='WalletTable__table_item'>
                                {
                                    item?.Wallet ? (
                                        <div className="WalletTable__table_item_wallet">
                                            <div className="WalletTable__table_item_wallet_value">
                                                {item?.Wallet}
                                            </div>
                                            <button onClick={() => copyValue(item?.Wallet)}><MdOutlineContentCopy/></button>
                                        </div>
                                    ) : 'N/D'
                                }
                                
                            </td>
                            <td className='WalletTable__table_item'>
                                {item?.Payment}
                            </td>
                            <td className='WalletTable__table_item'>
                                {item?.Send}
                            </td>
                            <td className='WalletTable__table_item WalletTable__table_status'>
                                {switchStatus(item?.Status, item?.Descript)}
                            </td>
                        </tr>
                    ))
                }
                
                {/* <tr className="WalletTable__table_row">
                    <td className='WalletTable__table_item WalletTable__table_type'>
                        Вывод
                    </td>
                    <td className='WalletTable__table_item WalletTable__table_sum'>
                        <div className="WalletTable__table_sum_main">1.022222 MPI <span>-15</span></div>
                        <div className="WalletTable__table_sum_tm">9.09.2022 12:59</div>
                    </td>
                    <td className='WalletTable__table_item WalletTable__table_status WalletTable__table_status-done'>
                        Выполнен
                    </td>
                </tr>
                <tr className="WalletTable__table_row">
                    <td className='WalletTable__table_item WalletTable__table_type'>
                        Вывод
                    </td>
                    <td className='WalletTable__table_item WalletTable__table_sum'>
                        <div className="WalletTable__table_sum_main">1.022222 MPI <span>-15</span></div>
                        <div className="WalletTable__table_sum_tm">9.09.2022 12:59</div>
                    </td>
                    <td className='WalletTable__table_item WalletTable__table_status WalletTable__table_status-cancel'>
                        Отклонен
                    </td>
                </tr> */}
            </table>
        </div>
    )
}

export default WalletTable;